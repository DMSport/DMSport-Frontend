import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom, NoticeIdAtom } from "../../../Store/atoms";
import { IPost } from "../../Notice/Post";
import * as _ from "./NoticeCard.style";

interface IAdminNotice extends IPost {
  content_preview: string;
}

const NoticeCard = ({ id, setModalType, title, content_preview }: IAdminNotice) => {
  const setNoticeModal = useSetRecoilState(isNoticeModalAtom);
  const setNoticeId = useSetRecoilState(NoticeIdAtom);
  const toggleNoticeModalAtom = () => {
    setNoticeModal((prev) => !prev);
    setNoticeId(id);
    setModalType("VIEW");
  };

  return (
    <_.Container onClick={toggleNoticeModalAtom}>
      <_.Title>{title}</_.Title>
      <_.SubTitle>{content_preview}</_.SubTitle>
    </_.Container>
  );
};

export default NoticeCard;
