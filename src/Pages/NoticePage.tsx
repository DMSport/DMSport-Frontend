import { useRecoilValue } from "recoil";
import styled from "styled-components";
import NoticeButton from "../Components/Notice/Button";
import NoticeModal from "../Components/Notice/NoticeModal";
import Post from "../Components/Notice/Post";
import { isNoticeAtom, isNoticeModalAtom } from "../Store/atoms";

const NoticePage = () => {
  const isNotice = useRecoilValue(isNoticeAtom);
  const isNoticeModal = useRecoilValue(isNoticeModalAtom);

  return (
    <NoticeContainer>
      <NoticeTitle>공지</NoticeTitle>
      <ButtonWrapper>
        <NoticeButton num={0} color={isNotice === 0} message="전체"></NoticeButton>
        <NoticeButton num={1} color={isNotice === 1} message="배드민턴"></NoticeButton>
        <NoticeButton num={2} color={isNotice === 2} message="농구"></NoticeButton>
        <NoticeButton num={3} color={isNotice === 3} message="축구"></NoticeButton>
      </ButtonWrapper>
      <Space>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Space>
      {isNoticeModal && <NoticeModal />}
    </NoticeContainer>
  );
};

export default NoticePage;

const NoticeContainer = styled.div`
  width: 100vw;
  height: 89vh;
  background-color: #ececec;
`;

const NoticeTitle = styled.div`
  position: absolute;
  top: 100px;
  left: 223px;
  font-size: 30px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 170px;
  left: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Space = styled.div`
  position: absolute;
  gap: 30px;
  top: 170px;
  left: 400px;
  width: 930px;
  height: 450px;
  flex-wrap: nowrap;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.white};
`;
