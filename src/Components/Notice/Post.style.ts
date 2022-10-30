import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  cursor: pointer;
  &:first-child {
    margin-top: 60px;
  }
  &:last-child {
    margin-bottom: 60px;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  font-size: 20px;
  font-weight: 700;
`;

export const Time = styled.div`
  position: absolute;
  top: 20px;
  right: 60px;
  font-size: 18px;
  font-weight: 400;
`;
