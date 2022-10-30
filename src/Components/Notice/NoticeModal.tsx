import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isNoticeModalAtom } from "../../Utils/atoms";

function NoticeModal() {
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const toggleNoticeModalAtom = () => {
    setNoticeModalAtom((prev) => !prev);
  };

  //모달 창이 열렸을 때 스크롤을 막는 코드
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Container>
      <Background onClick={toggleNoticeModalAtom} />
      <White>
        <Wrapper>
          <Title>제목</Title>
          <Time>1시간전</Time>
        </Wrapper>
        <Notice>오늘은 동아리가 없어요</Notice>
      </White>
    </Container>
  );
}

export default NoticeModal;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//모달 앞부분 중앙
const White = styled.div`
  position: fixed;
  width: 930px;
  height: 450px;
  background-color: ${(props) => props.theme.white};
  z-index: 101;
  overflow-y: scroll;
  white-space: pre-wrap;
`;

//모달 뒷부분 검은색
const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

//제목과 남은 시간을 같은 줄에 위치하도록 사용
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-top: 20px;
  margin-left: 70px;
  border-bottom: 1px solid;
`;

//제목
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

//시간
const Time = styled.div`
  position: absolute;
  right: 30px;
  font-size: 20px;
  font-weight: 400;
`;

const Notice = styled.div`
  width: 700px;
  margin-left: 70px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
`;
