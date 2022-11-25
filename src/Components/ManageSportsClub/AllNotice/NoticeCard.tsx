import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom, NoticeIdAtom } from "../../../Store/atoms";
import { IPost } from "../../Notice/Post";
import * as _ from "./NoticeCard.style";

interface IAdminNotice extends IPost {
  content_preview: string;
}

const NoticeCard = ({ id, setModalType, title, content_preview }: IAdminNotice) => {
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const setNoticeIdAtom = useSetRecoilState(NoticeIdAtom);
  const toggleNoticeModalAtom = () => {
    setNoticeModalAtom((prev) => !prev);
    setNoticeIdAtom(id);
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
