import * as _ from "../Button/MyButton.style";
import { ChangeModal, ChangeUserHeader } from "../../../Store/atoms";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import ToastError from "../../../Utils/Function/ErrorMessage";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface IMy {
  type: string;
  color: string;
  content: string;
}

function MyButton({ type, color, content }: IMy) {
  const setChangeModalValue = useSetRecoilState(ChangeModal);
  const cookies = new Cookies();
  const setUserHeader = useSetRecoilState(ChangeUserHeader);
  const navigater = useNavigate();

  const RemoveToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("authority");
    localStorage.removeItem("expiresAt");
    cookies.remove("refresh_token");
    setUserHeader(true);
    navigater("/");
  };

  const Button = () => {
    switch (type) {
      case "logout":
        axios
          .delete(process.env.REACT_APP_BASE_URL + `users/logout`, {
            headers: { Authorization: ` Bearer ${localStorage.getItem("access_token")}` },
          })
          .then(() => {
            Swal.fire("로그아웃 성공", "로그아웃되었습니다.", "success");
            RemoveToken();
          })
          .catch(() => {
            ToastError("로그아웃에 실패하였습니다.");
          });
        break;
      case "deleteuser":
        (async () => {
          const { value: getName } = await Swal.fire({
            title: "회원탈퇴",
            text: "회원을 탈퇴하면 다시는 되돌릴 수 없습니다.",
            input: "text",
            inputPlaceholder: "비밀번호를 입력해주세요.",
          });
          // 이후 처리되는 내용.
          if (getName) {
            axios
              .delete(process.env.REACT_APP_BASE_URL + `users`, {
                data: { password: getName },
                headers: { Authorization: ` Bearer ${localStorage.getItem("access_token")}` },
              })
              .then(() => {
                Swal.fire("회원탈퇴 성공", "회원탈퇴에 성공하였습니다.", "success");
                RemoveToken();
              })
              .catch((e) => {
                ToastError("회원탈퇴에 실패하였습니다.");
              });
          }
        })();
        break;
      case "changepw":
        setChangeModalValue("ChangePwMy");
    }
  };

  return (
    <_.Container onClick={Button}>
      <_.Name color={color}>{content}</_.Name>
      <_.Arrow color={color}>&rsaquo;</_.Arrow>
    </_.Container>
  );
}

export default MyButton;
