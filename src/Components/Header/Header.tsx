import * as _ from "./Header.style";
import { Logo } from "../../Assets/SVG/Logo";
import "../../fonts/font.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import SignIn from "../Sign/SignIn/SignIn";
import Certification from "../Sign/SignUp/Certification";
import SignUp from "../Sign/SignUp/SignUp";
import FYPCerti from "../Sign/ChangePw/FYPCerti";
import ChangePw from "../Sign/ChangePw/ChangePw";
import { ChangeModal, ChangeUserHeader } from "../../Store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import ChangePwMy from "../My/ChangePw/ChangePwMy";

const Header = () => {
  const [changeModalValue, setChangeModalValue] = useRecoilState(ChangeModal);
  const userHeader = useRecoilValue(ChangeUserHeader);

  const UserLogin = useMemo(() => {
    return (
      <>
        <_.Button
          onClick={() => {
            setChangeModalValue("SignIn");
          }}
          type="button"
          value="로그인"
        />
        <_.Button
          onClick={() => {
            setChangeModalValue("Certification");
          }}
          type="button"
          value="회원가입"
        />
      </>
    );
  }, [userHeader]);

  const Modal = useMemo(() => {
    switch (changeModalValue) {
      case "SignIn":
        return <SignIn />;
      case "Certification":
        return <Certification />;
      case "SignUp":
        return <SignUp />;
      case "FYPCerti":
        return <FYPCerti />;
      case "ChangePw":
        return <ChangePw />;
      case "ChangePwMy":
        return <ChangePwMy />;
      default:
        return <></>;
    }
  }, [changeModalValue]);

  return (
    <>
      {Modal}
      <_.HeaderContainer>
        <Link to="/">
          <_.Wrapper>
            <Logo width={50} height={42}></Logo>
            <_.DMS>DMS</_.DMS>
            <_.Port>port</_.Port>
          </_.Wrapper>
        </Link>
        <_.Wrapper2>
          {localStorage.getItem("authority") === "ADMIN" ? (
            <Link to="/adminpage">
              <_.Letter>관리자</_.Letter>
            </Link>
          ) : (
            <></>
          )}
          <Link to="/club/soccer">
            <_.Letter>클럽</_.Letter>
          </Link>
          <Link to="/notice">
            <_.Letter>공지</_.Letter>
          </Link>
          {localStorage.getItem("access_token") ? (
            <Link to="/mypage">
              <_.Letter>마이페이지</_.Letter>
            </Link>
          ) : (
            UserLogin
          )}
        </_.Wrapper2>
      </_.HeaderContainer>
    </>
  );
};

export default Header;
