import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const Front = styled.div<{ flip: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 330px;
  height: 440px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #80cce3;
  transform: rotateY(${(props) => (props.flip ? 180 : 0)}deg);
  z-index: ${(props) => (props.flip ? 0 : 1)};
  transition: 1.5s;
`;

export const FrontWrapper = styled.div`
  display: flex;
  margin-left: 40px;
`;

export const Text = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Back = styled.div<{ flip: boolean }>`
  position: absolute;
  width: 330px;
  height: 440px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #80cce3;
  transform: rotateY(${(props) => (props.flip ? 0 : 180)}deg);
  z-index: ${(props) => (props.flip ? 1 : 0)};
  transition: 1.5s;
`;

export const Name = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  font-size: 30px;
  color: black;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 30px;
  bottom: 30px;
`;

export const DMS = styled.div`
  font-weight: 700;
  font-size: 37px;
  color: #80cce3;
`;

export const Port = styled(DMS)`
  color: #5596aa;
  font-family: "ItalicBold";
  font-weight: 500;
`;

export const Select = styled.select`
  position: absolute;
  top: 200px;
  left: 30px;
  width: 130px;
  height: 35px;
  background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png") calc(100% - 5px)
    center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
  border: 1px solid ${(props) => props.theme.Primary};
`;
