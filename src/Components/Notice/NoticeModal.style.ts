import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//모달 앞부분 중앙
export const White = styled.div`
  position: fixed;
  width: 930px;
  height: 450px;
  background-color: ${(props) => props.theme.white};
  z-index: 101;
  overflow-y: scroll;
  white-space: pre-wrap;
`;

//모달 뒷부분 검은색
export const Background = styled.div`
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
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-top: 20px;
  margin-left: 70px;
  border-bottom: 1px solid;
`;

//제목
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

//시간
export const Time = styled.div`
  position: absolute;
  right: 30px;
  font-size: 20px;
  font-weight: 400;
`;

export const Notice = styled.div`
  width: 700px;
  margin-left: 70px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
`;
