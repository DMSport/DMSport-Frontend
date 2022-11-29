import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

export const Aside = styled.div<{ x: number }>`
  position: absolute;
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.Black};
  transform: translateX(${(props) => props.x}%);
  transition: 0.5s;
`;

export const Margin = styled.div`
  position: absolute;
  margin-left: 30px;
`;

export const Img = styled.img`
  position: fixed;
  left: 30px;
  top: 18px;
  z-index: 99;
  cursor: pointer;
`;

export const Title = styled.div`
  position: absolute;
  left: 30px;
  top: 60px;
  font-size: 14px;
  color: #808080;
  font-weight: 600;
  margin-top: 10px;
`;

export const Box = styled.div<{ background: boolean }>`
  display: flex;
  align-items: center;
  width: 250px;
  height: 55px;
  cursor: pointer;
  background-color: ${(props) => props.background && "#55acee"};
  color: #f1eeee;
  &:first-child {
    margin-top: 110px;
  }
`;

export const Text = styled.div`
  margin-left: 75px;
  font-weight: 600;
  font-size: 18px;
`;
