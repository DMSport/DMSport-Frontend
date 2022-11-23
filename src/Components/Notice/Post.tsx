import * as _ from "./Post.style";
import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom, NoticeIdAtom } from "../../Store/atoms";
import { CreatedDate } from "../../Utils/Function/Timer";
import { ModalType } from "../../Pages/NoticePage/NoticePage";

interface IPost {
  title: string;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
  created_at: string;
  id: number;
}

function Post({ title, setModalType, created_at, id }: IPost) {
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const setNoticeIdAtom = useSetRecoilState(NoticeIdAtom);
  const toggleNoticeModalAtom = () => {
    setModalType("VIEW");
    setNoticeModalAtom((prev) => !prev);
    setNoticeIdAtom(id);
  };

  return (
    <_.Container onClick={toggleNoticeModalAtom}>
      <_.Title>{title}</_.Title>
      <_.Time>{CreatedDate(created_at)}</_.Time>
    </_.Container>
  );
}

export default Post;
