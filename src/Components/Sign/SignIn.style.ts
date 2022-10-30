import styled from "styled-components";

export const Container = styled.div`
  display: fixed;
  margin: auto;
  margin-top: 155px;
  width: 380px;
  height: 504px;
  z-index: 99;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 380px;
  height: 504px;
  background: #ffffff;
  border-radius: 30px;
`;

export const TitleText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  margin-top: 55px;
  margin-bottom: 37px;
`;

export const TextInput = styled.input<{ padding?: string; width?: string }>`
  font-size: 16px;
  border: none;
  width: ${(props) => props.width || "274px"};
  margin-top: 10px;
  padding: ${(props) => props.padding || "15px 10px"};
  border-bottom: 2px solid #acacac;
  outline: none;
  &:focus {
    border-bottom: 2px solid black;
  }
  :disabled {
    background-color: white;
    color: #acacac;
  }
  ::placeholder {
    color: #d9d9d9;
  }
`;

export const FYP = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #d9d9d9;
  cursor: pointer;
`;

export const Button = styled.button<{ width?: string; height?: string; radius?: string; margin?: string }>`
  width: ${(props) => props.width || "271.08px"};
  height: ${(props) => props.height || "50.92px"};
  border: none;
  background: #226699;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.radius || "30px"};
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  margin: ${(props) => props.margin || "0"};
  :disabled {
    background: #add1ec;
  }
`;

export const SignUpText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #898a8d;
  margin-top: 13px;
  cursor: pointer;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const CertiWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Eye = styled.img`
  position: absolute;
  margin-left: -30px;
  margin-top: 20px;
`;
