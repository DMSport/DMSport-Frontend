import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ececec;
`;

export const Wrapper = styled.div<{ margin: boolean }>`
  position: absolute;
  margin-left: ${(props) => (props.margin ? 10 : 300)}px;
  transition: 0.5s;
  margin-top: 100px;
  width: 60vw;
  height: 82vh;
`;

export const Title = styled.div`
  color: black;
  font-size: 45px;
  font-weight: 700;
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  width: 160px;
  height: 45px;
  background-color: ${(props) => props.theme.SkyBlue};
  border-radius: 7px;
  cursor: pointer;
`;

export const Notices = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: 60vw;
  height: 60vh;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};
  gap: 20px;
`;
