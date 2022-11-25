import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import NoticeButton from "../../Components/Notice/Button";
import NoticeModal from "../../Components/Notice/NoticeModal";
import Post from "../../Components/Notice/Post";
import { NoticeTypeAtom, isNoticeModalAtom } from "../../Store/atoms";
import api from "../../Utils/api/notice";
import * as _ from "./NoticePage.style";

export type ModalType = "VIEW" | "EDIT" | "WRITE" | "ADMINWRITE";
export interface INotice {
  id: number;
  type: string;
  title: string;
  content_preview: string;
  created_at: string;
}

const NoticePage = () => {
  const NoticeType = useRecoilValue(NoticeTypeAtom);
  const [isNoticeModal, setNoticeModalAtom] = useRecoilState(isNoticeModalAtom);
  const [modalType, setModalType] = useState<ModalType>("VIEW");
  const WriteNotice = () => {
    setModalType("WRITE");
    toggleNoticeModalAtom();
  };
  const toggleNoticeModalAtom = () => {
    setNoticeModalAtom((prev) => !prev);
  };

  const { data } = useQuery(["Notice"], api.getNoticeAll);

  return (
    <_.NoticeContainer>
      <_.NoticeTitle>공지</_.NoticeTitle>
      <_.ButtonWrapper>
        <NoticeButton isSelected={NoticeType === "ALL"} message="전체"></NoticeButton>
        <NoticeButton isSelected={NoticeType === "BADMINTON"} message="배드민턴"></NoticeButton>
        <NoticeButton isSelected={NoticeType === "BASKETBALL"} message="농구"></NoticeButton>
        <NoticeButton isSelected={NoticeType === "SOCCER"} message="축구"></NoticeButton>
        <NoticeButton isSelected={NoticeType === "VOLLEYBALL"} message="배구"></NoticeButton>
      </_.ButtonWrapper>
      {localStorage.getItem("authority") !== "ADMIN" &&
        localStorage.getItem("authority") !== "USER" &&
        localStorage.getItem("authority")?.split("_")[0] === NoticeType && (
          <_.Button onClick={WriteNotice}>공지작성</_.Button>
        )}
      <_.Space>
        {data?.data.notices
          .filter((notice: INotice) => notice.type === NoticeType)
          .map((res: INotice) => {
            const { id, created_at, title } = res;
            return <Post key={id} setModalType={setModalType} id={id} created_at={created_at} title={title}></Post>;
          })}
      </_.Space>
      {isNoticeModal && <NoticeModal color="#5596aa" modalType={modalType} setModalType={setModalType} />}
    </_.NoticeContainer>
  );
};

export default NoticePage;
