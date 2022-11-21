import styled from "styled-components";

export const Pages = styled.div`
  position: absolute;
  top: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 40px;
  gap: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Arrow = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b6d7;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgba(217, 217, 217, 0.7);
    border-radius: 5px;
  }
`;

export const Number = styled.div<{ isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  font-size: 22px;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelect ? props.theme.SkyBlue : props.theme.white)};
  color: ${(props) => (props.isSelect ? props.theme.white : "#b5b6d7")};
  &:hover {
    background-color: ${(props) => props.theme.SkyBlue};
    color: white;
  }
  cursor: pointer;
`;

export const Pot = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #b5b6d7;
`;
