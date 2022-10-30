import * as S from "./Header.style";
import { Logo } from "../../Assets/SVG/Logo";
import "../../fonts/font.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignIn from "../Sign/SignIn";
import Certification from "../Sign/Certification";
import SignUp from "../Sign/SignUp";
import FYPCerti from "../Sign/FYPCerti";
import ChangePw from "../Sign/ChangePw";

const Header = () => {
  const [signInModal, setSignInModal] = useState(false)
  const [certifiModal, setCertifiModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)
  const [FYPCertiModal, setFYPCertiModal] = useState(false)
  const [changePwModal, setChangePwModal] = useState(false)

  return (
    <>
      {signInModal && (<SignIn setSignInModal={setSignInModal} setCertifiModal={setCertifiModal} setFYPCertiModal={setFYPCertiModal} />)}
      {certifiModal && (<Certification setSignUpModal={setSignUpModal} setCertiModal={setCertifiModal} />)}
      {signUpModal && (<SignUp setSignUpModal={setSignUpModal} />)}
      {FYPCertiModal && (<FYPCerti setChangePwModal={setChangePwModal} setFYPCertiModal={setFYPCertiModal} />)}
      {changePwModal && (<ChangePw setChangePwModal={setChangePwModal} />)}
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
          <Link to="/notice">
            <S.Letter>공지</S.Letter>
          </Link>
          <S.Button
            onClick={() => {
              setSignInModal(true);
            }}
            type="button"
            value="로그인"
          />
          <S.Button
            onClick={() => {
              setCertifiModal(true);
            }}
            type="button"
            value="회원가입"
          />
        </S.Wrapper2>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
