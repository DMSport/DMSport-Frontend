import * as S from "./Header.style";
import { Logo } from "../../Assets/SVG/Logo";
import "../../fonts/font.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import SignIn from "../Sign/SignIn/SignIn";
import Certification from "../Sign/SignUp/Certification";
import SignUp from "../Sign/SignUp/SignUp";
import FYPCerti from "../Sign/ChangePw/FYPCerti";
import ChangePw from "../Sign/ChangePw/ChangePw";

const Header = () => {
  const [signInModal, setSignInModal] = useState(false)
  const [certifiModal, setCertifiModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)
  const [FYPCertiModal, setFYPCertiModal] = useState(false)
  const [changePwModal, setChangePwModal] = useState(false)
  const AdminLogin = useMemo(() => {
    return localStorage.getItem("authority") === "ADMIN" ?
      <Link to="/adminpage">
        <S.Letter>관리자</S.Letter>
      </Link>
      :
      <>
      </>
  }, [localStorage.getItem("authority")])
  const UserLogin = useMemo(() => {
    return !localStorage.getItem("access_token") ?
      <>
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
      </>
      :
      <Link to="/mypage">
        <S.Letter>마이페이지</S.Letter>
      </Link>
  }, [localStorage.getItem("access_token")]
  )
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
          {AdminLogin}
          <S.Letter>클럽</S.Letter>
          <Link to="/notice">
            <S.Letter>공지</S.Letter>
          </Link>
          {UserLogin}
        </S.Wrapper2>
      </S.HeaderContainer>
    </>
  );
};                    

export default Header;
