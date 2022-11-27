import { useQuery } from "@tanstack/react-query";
import NoticeCard from "./NoticeCard";
import api from "../../../Utils/api/notice";
import { INotice, ModalType } from "../../../Pages/NoticePage/NoticePage";
import { isNoticeModalAtom } from "../../../Store/atoms";
import { useState } from "react";
import { useRecoilState } from "recoil";
import NoticeModal from "../../Notice/NoticeModal";
import * as _ from "./AllNotice.style";
import AdminPageNation from "../PageNation/AdminPageNation";

const AllNotice = ({ margin }: { margin: boolean }) => {
  const [isNoticeModal, setNoticeModal] = useRecoilState(isNoticeModalAtom);
  const [modalType, setModalType] = useState<ModalType>("VIEW");
  const { data } = useQuery(["Notice"], () => api.getNoticeAll());
  const [page, setPage] = useState<number>(0);

  const writeNotice = () => {
    setNoticeModal((prev) => !prev);
    setModalType("ADMINWRITE");
  };

  return (
    <_.Container>
      <_.Wrapper margin={margin}>
        <_.Title>전체 공지 작성</_.Title>
        <_.Button onClick={writeNotice}>공지 작성</_.Button>
        <_.Notices>
          {data?.data.notices.slice(page * 3, page * 3 + 3).map((res: INotice) => {
            const { id, title, content_preview, created_at } = res;
            return (
              <NoticeCard
                key={res?.id}
                created_at={created_at}
                content_preview={content_preview}
                title={title}
                setModalType={setModalType}
                id={id}
              />
            );
          })}
          <AdminPageNation page={page} setPage={setPage} data={data?.data.notices} searchType={"ALL"} keyword={""} />
        </_.Notices>
      </_.Wrapper>
      {isNoticeModal && <NoticeModal color="#7D9BE9" modalType={modalType} setModalType={setModalType} />}
    </_.Container>
  );
};

export default AllNotice;
