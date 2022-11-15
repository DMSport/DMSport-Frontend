import styled from "styled-components";

export const NoticeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ececec;
`;

export const NoticeTitle = styled.div`
  position: absolute;
  top: 100px;
  left: 223px;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 170px;
  left: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Space = styled.div`
  position: absolute;
  gap: 30px;
  top: 170px;
  right: 5%;
  width: 65vw;
  height: 60vh;
  flex-wrap: nowrap;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.white};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 110px;
  height: 40px;
  color: ${(props) => props.theme.white};
  background-color: #5596aa;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  top: 120px;
  right: 5%;
  cursor: pointer;
`;
