import { useQuery } from "@tanstack/react-query";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isNoticeModalAtom, NoticeIdAtom, NoticeTypeAtom } from "../../Store/atoms";
import * as _ from "./NoticeModal.style";
import api from "../../Utils/api/notice";
import { CreatedDate } from "../../Utils/Function/Timer";
import useInput from "../../Hooks/useInput";
import ToastError from "../../Utils/Function/ErrorMessage";
import Swal from "sweetalert2";
import { ModalType } from "../../Pages/NoticePage/NoticePage";
import { useNavigate } from "react-router-dom";

interface IModalType {
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
  color: string;
}

function NoticeModal({ modalType, setModalType, color }: IModalType) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const [noticeTypeAtom, setNoticeTypeAtom] = useRecoilState(NoticeTypeAtom);
  const NoticeId = useRecoilValue(NoticeIdAtom);
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();
  const navigate = useNavigate();
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

  const SelectClub = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.currentTarget.value) {
      case "전체":
        setNoticeTypeAtom("ALL");
        break;
      case "축구":
        setNoticeTypeAtom("SOCCER");
        break;
      case "농구":
        setNoticeTypeAtom("BASKETBALL");
        break;
      case "배드민턴":
        setNoticeTypeAtom("BADMINTON");
        break;
      case "배구":
        setNoticeTypeAtom("VOLLEYBALL");
        break;
      default:
        return;
    }
  };

  const postNotice = () => {
    api
      .postClubNotice(title, content)
      .then(() => {
        Swal.fire("게시 성공", "공지가 게시되었습니다", "success").then(() => {
          setNoticeModalAtom(false);
          navigate(0);
        });
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

  const postAdminNotice = () => {
    api.postAdminNotice(title, content, noticeTypeAtom).then(() => {
      Swal.fire("게시 성공", "공지가 게시되었습니다", "success").then(() => {
        setNoticeModalAtom(false);
        navigate(0);
      });
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
        Swal.fire("수정 성공", "공지가 수정되었습니다", "success").then(() => {
          setNoticeModalAtom((prev) => !prev);
          navigate(0);
        });
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
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .deleteClubNotice(NoticeId)
          .then(() => {
            Swal.fire("삭제 성공", "공지가 삭제되었습니다", "success").then(() => {
              setNoticeModalAtom((prev) => !prev);
              navigate(0);
            });
          })
          .catch((err) => {
            switch (err.response.data.status) {
              case 403:
                return ToastError("권한이 없어요");
            }
          });
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
            <_.Button color="#5596aa" type="button" onClick={postNotice} value="완료" />
          </form>
        );
      case "ADMINWRITE":
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
              <_.Select onChange={SelectClub}>
                <option>전체</option>
                <option>축구</option>
                <option>농구</option>
                <option>배드민턴</option>
                <option>배구</option>
              </_.Select>
            </_.Wrapper>
            <_.Notice
              value={content}
              onChange={onChangeContent}
              maxLength={255}
              placeholder="내용을 입력하세요(255자 이내)"
            ></_.Notice>
            <_.Button color="#7D9BE9" type="button" onClick={postAdminNotice} value="완료" />
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
          (localStorage.getItem("authority") === "ADMIN" && modalType !== "ADMINWRITE")) && (
          <>
            {isEditClicked ? (
              <_.Button color={color} onClick={AfterEdit} type="button" value="완료" />
            ) : (
              <>
                <_.EditButton color={color} onClick={BeforeEdit} type="button" value="수정하기" />
                <_.DeleteButton color={color} onClick={Delete} type="button" value="삭제하기" />
              </>
            )}
          </>
        )}
      </_.White>
    </_.Container>
  );
}

export default NoticeModal;
