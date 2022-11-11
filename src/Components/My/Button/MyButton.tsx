import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as _ from "../Button/MyButton.style";
import { ChangeAdminHeader, ChangeUserHeader } from "../../../Store/atoms";
import { useSetRecoilState } from "recoil";
import { Cookies } from "react-cookie";

interface IMy {
  type: string;
  color: string;
  content: string;
}

function MyButton({ type, color, content }: IMy) {
  const cookies = new Cookies()
  const setUserHeader = useSetRecoilState(ChangeUserHeader);
  const setAdminHeader = useSetRecoilState(ChangeAdminHeader);
  const navigate = useNavigate();

  const button = () => {
    if (type === "logout") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("authority");
      cookies.remove("refresh_token")
      setUserHeader(true)
      setAdminHeader(true)
      Swal.fire("로그아웃 성공", "로그아웃되었습니다.", "success");
      navigate("/");
    }
    if (type === "deleteuser") {
    }
    if (type === "changepw") {
    }
  };
  return (
    <_.Container onClick={button}>
      <_.Name color={color}>{content}</_.Name>
      <_.Arrow color={color}>&rsaquo;</_.Arrow>
    </_.Container>
  );
}

export default MyButton;
