import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 56vw;
  height: 100px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:first-child {
    margin-top: 25px;
  }
  cursor: pointer;
`;

export const Title = styled.div`
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  top: 15px;
  left: 35px;
`;

export const SubTitle = styled.div`
  position: absolute;
  bottom: 15px;
  left: 35px;
  font-size: 17px;
  font-weight: 550;
`;
