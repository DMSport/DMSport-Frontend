import * as S from "./Header.style"
import { Logo } from "../../Assets/SVG/Logo";
import "../../fonts/font.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignIn from "../SignIn/SignIn";

const Header = () => {
  const [modal, setModal] = useState(false)

  const ViewModal = () => {
    setModal(!modal)
}

  return (
    <>
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
          <S.Button onClick={ViewModal} type="button" value="로그인" />
          <S.Button type="button" value="회원가입" />
        </S.Wrapper2>
      </S.HeaderContainer>
      {modal ? (<SignIn modal={modal} setModal={setModal} />) : null}
    </>
  );
};

export default Header;