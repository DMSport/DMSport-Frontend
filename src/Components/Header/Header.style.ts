import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 65px;
  background-color: ${(props) => props.theme.Black};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DMS = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #80cce3;
`;

export const Port = styled(DMS)`
  color: #5596aa;
  font-family: "ItalicBold";
  font-weight: 500;
`;

export const Wrapper2 = styled(Wrapper)`
  gap: 20px;
`;

export const Letter = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #b0bfca;
  cursor: pointer;
`;

export const Button = styled.input`
  width: 80px;
  height: 30px;
  background-color: #226699;
  border-radius: 60px;
  border: 0;
  outline: 0;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
