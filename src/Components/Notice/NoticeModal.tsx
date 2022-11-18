import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isNoticeModalAtom, NoticeIdAtom, NoticeTypeAtom } from "../../Store/atoms";
import * as _ from "./NoticeModal.style";
import api from "../../Utils/api/notice";
import { CreatedDate } from "../../Utils/Function/Timer";
import useInput from "../../Hooks/useInput";
import ToastError from "../../Utils/Function/ErrorMessage";
import Swal from "sweetalert2";
import { ModalType } from "../../Pages/NoticePage/NoticePage";

interface IModalType {
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}

function NoticeModal({ modalType, setModalType }: IModalType) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const noticeTypeAtom = useRecoilValue(NoticeTypeAtom);
  const NoticeId = useRecoilValue(NoticeIdAtom);
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();
  const toggleNoticeModalAtom = () => {
    setNoticeModalAtom((prev) => !prev);
  };
  const { data, isLoading } = useQuery(["Notice", NoticeId], () => api.getNoticeDetail(NoticeId));

  //모달 창이 열렸을 때 스크롤을 막는 코드
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const postNotice = () => {
    api
      .postClubNotice(title, content)
      .then(() => {
        Swal.fire("게시 성공", "공지가 게시되었습니다", "success");
        setNoticeModalAtom(false);
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 400:
            return ToastError("제목 혹은 내용을 확인해주세요");
          case 403:
            return ToastError("권한이 없어요");
        }
      });
  };

  const BeforeEdit = () => {
    setModalType("EDIT");
    setTitle(data?.data.title);
    setContent(data?.data.content);
    setIsEditClicked((prev) => !prev);
  };

  const AfterEdit = () => {
    api
      .editClubNotice(title, content, NoticeId)
      .then(() => {
        Swal.fire("수정 성공", "공지가 수정되었습니다", "success");
        setNoticeModalAtom((prev) => !prev);
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 400:
            return ToastError("제목 혹은 내용을 확인해주세요");
          case 403:
            return ToastError("권한이 없어요");
        }
      });
  };

  const Delete = async () => {
    await Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제하시면 다시는 공지를 보실 수 없습니다",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });
    await api
      .deleteClubNotice(NoticeId)
      .then(() => {
        Swal.fire("삭제 성공", "공지가 삭제되었습니다", "success");
        setNoticeModalAtom((prev) => !prev);
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 403:
            return ToastError("권한이 없어요");
        }
      });
  };

  const ModalContent = () => {
    switch (modalType) {
      case "VIEW":
        return (
          <>
            {isLoading ? (
              <_.Loader>Loading...</_.Loader>
            ) : (
              <>
                <_.Wrapper>
                  <_.Title readOnly value={data?.data.title}></_.Title>
                  <_.Time readOnly value={CreatedDate(data?.data.created_at)}></_.Time>
                </_.Wrapper>
                <_.Notice readOnly value={data?.data.content}></_.Notice>
              </>
            )}
          </>
        );
      case "EDIT":
        return (
          <>
            <_.Wrapper>
              <_.Title style={{ border: "1px solid black" }} value={title} onChange={onChangeTitle}></_.Title>
              <_.Time value={CreatedDate(data?.data.created_at)}></_.Time>
            </_.Wrapper>
            <_.Notice style={{ border: "1px solid black" }} value={content} onChange={onChangeContent}></_.Notice>
          </>
        );
      case "WRITE":
        return (
          <form>
            <_.Wrapper>
              <_.Title
                type="text"
                value={title}
                onChange={onChangeTitle}
                maxLength={20}
                placeholder="제목을 입력하세요(20자 이내)"
              />
            </_.Wrapper>
            <_.Notice
              value={content}
              onChange={onChangeContent}
              maxLength={255}
              placeholder="내용을 입력하세요(255자 이내)"
            ></_.Notice>
            <_.Button type="button" onClick={postNotice} value="완료" />
          </form>
        );
    }
  };

  return (
    <_.Container>
      <_.Background onClick={toggleNoticeModalAtom} />
      <_.White>
        {ModalContent()}
        {((localStorage.getItem("authority") !== "USER" &&
          localStorage.getItem("authority")?.split("_")[0] === noticeTypeAtom &&
          modalType !== "WRITE") ||
          localStorage.getItem("authority") === "ADMIN") && (
          <>
            {isEditClicked ? (
              <_.Button onClick={AfterEdit} type="button" value="완료" />
            ) : (
              <>
                <_.EditButton onClick={BeforeEdit} type="button" value="수정하기" />
                <_.DeleteButton onClick={Delete} type="button" value="삭제하기" />
              </>
            )}
          </>
        )}
      </_.White>
    </_.Container>
  );
}

export default NoticeModal;
