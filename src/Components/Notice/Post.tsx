import * as _ from "./Post.style";
import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom } from "../../Utils/atoms";

function Post() {
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const toggleNoticeModalAtom = () => setNoticeModalAtom((prev) => !prev);

  return (
    <_.Container onClick={toggleNoticeModalAtom}>
      <_.Title>제목</_.Title>
      <_.Time>방금전</_.Time>
    </_.Container>
  );
}

export default Post;
