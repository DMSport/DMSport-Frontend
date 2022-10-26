import * as S from "./style"
import { Logo } from "../../Assets/SVG/Logo";
import "../../fonts/font.css";
import { Link } from "react-router-dom";
//헤더 컴포넌트 입니다

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link to="/">
        <S.Wrapper>
          <Logo width={50} height={42}></Logo>
          <S.DMS>DMS</S.DMS>
          <S.Port>port</S.Port>
        </S.Wrapper>
      </Link>
      <S.Wrapper2>
        <S.Letter>클럽</S.Letter>
        <S.Letter>공지</S.Letter>
        <Link to="SignIn">
          <S.Button type="button" value="로그인" />
        </Link>
        <Link to="/Certification">
          <S.Button type="button" value="회원가입" />
        </Link>
      </S.Wrapper2>
    </S.HeaderContainer>
  );
};

export default Header;