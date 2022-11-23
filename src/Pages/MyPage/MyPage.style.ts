import styled from "styled-components";

export const MyPageContainer = styled.div`
  position: relative;
  width: 100vw;
`;

export const Name = styled.div`
  position: absolute;
  top: 180px;
  left: 150px;
  display: flex;
  font-size: 50px;
  font-weight: bold;
  color: black;
  position: absolute;
`;

export const Auth = styled.div`
  position: absolute;
  top: 200px;
  left: 290px;
  font-size: 30px;
  font-weight: 600;
  color: #737373;
`;

export const BackImg = styled.img`
  width: 100vw;
  margin-top: 60px;
  z-index: 0;
`;

export const Hider = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 44vw;
  background-color: #ecfffe;
  border-radius: 50px 50px 0px 0px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 20%;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;
