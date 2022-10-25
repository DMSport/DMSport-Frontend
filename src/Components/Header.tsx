import styled from "styled-components";
import { Logo } from "./Logo";
import "../fonts/font.css";
import { Link } from "react-router-dom";
//헤더 컴포넌트 입니다

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Wrapper>
          <Logo width={50} height={42}></Logo>
          <DMS>DMS</DMS>
          <Port>port</Port>
        </Wrapper>
      </Link>
      <Wrapper2>
        <Letter>클럽</Letter>
        <Letter>공지</Letter>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </Wrapper2>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 65px;
  background-color: ${(props) => props.theme.Black};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DMS = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #80cce3;
`;

const Port = styled(DMS)`
  color: #5596aa;
  font-family: "ItalicBold";
  font-weight: 500;
`;

const Wrapper2 = styled(Wrapper)`
  gap: 20px;
`;

const Letter = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #b0bfca;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: #226699;
  border-radius: 60px;
  border: 0;
  outline: 0;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  font-weight: 700;
`;
