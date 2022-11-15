import { useRef, useState, useEffect } from "react";
import CloseEye from "../../../Assets/SVG/CloseEye.svg";
import OpenEye from "../../../Assets/SVG/OpenEye.svg";
import * as _ from "../SignIn.style";
import axios from "axios";
import ToastError from "../../../Utils/Function/ErrorMessage";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ChangeModal, Email } from "../../../Store/atoms";
import Swal from "sweetalert2";


const SignUp = () => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [pwType, setPwType] = useState(true)
    const [rePwType, setRePwType] = useState(true)
    const emailRecoil = useRecoilValue(Email);
    const setChangeModalValue = useSetRecoilState(ChangeModal);
    const [inputs, setInputs] = useState({
        email: emailRecoil,
        name: "",
        password: ""
    });
    const [rePassword, setRePassword] = useState("")

  const { name, password } = inputs;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

    const CheckPw = () => {
        if (password === rePassword) {
            SignUpAPI()
        }
        else {
            ToastError("비밀번호가 일치하지 않습니다.")
        }
    }
  };

    const SignUpAPI = () => {
        axios.post(process.env.REACT_APP_BASE_URL + `users`, inputs)
            .then(() => {
                Swal.fire(
                    '회원가입 성공',
                    '회원가입에 성공하였습니다.',
                    'success'
                )
            })
            .then(() => {
                setChangeModalValue("")
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 400:
                            return ToastError("아이디나 비밀번호에 공백이 포함되어 있습니다.");
                        case 401:
                            return ToastError("이메일이 인증되지 않았습니다.");
                        case 409:
                            return ToastError("아이디가 중복됩니다.");
                        case 500:
                            return ToastError("관리자에게 문의해주세요");
                        default:
                            ToastError("네트워크 연결을 확인해주세요.");
                    }
                } else {
                    ToastError("네트워크 연결을 확인해주세요.");
                }
            })
    }

  return (
    <>
      {/* <ToastContainer /> */}
      <_.Background
        ref={ModalCheck}
        onClick={(e) => {
          if (ModalCheck.current === e.target) {
            setChangeModalValue("");
          }
        }}
      >
        <_.Container>
          <_.Wrapper>
            <_.TitleText>시작하기</_.TitleText>
            <_.TextInput
              name="name"
              onChange={onInputChange}
              value={name}
              type="text"
              placeholder="이름(실명)을 입력해주세요."
            />
            <div>
              <_.TextInput
                padding="15px 40px 15px 10px "
                name="password"
                onChange={onInputChange}
                value={password}
                type={pwType ? "password" : "text"}
                placeholder="비밀번호를 입력해주세요"
              />
              <_.Eye
                width="25px"
                height="25px"
                src={pwType ? OpenEye : CloseEye}
                onClick={() => {
                  setPwType(!pwType);
                }}
              ></_.Eye>
            </div>
            <div>
              <_.TextInput
                padding="15px 40px 15px 10px "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setRePassword(e.target.value);
                }}
                value={rePassword}
                type={rePwType ? "password" : "text"}
                placeholder="비밀번호를 재입력해주세요"
              />
              <_.Eye
                width="25px"
                height="25px"
                src={rePwType ? OpenEye : CloseEye}
                onClick={() => {
                  setRePwType(!rePwType);
                }}
              ></_.Eye>
            </div>
            <_.Button disabled={!(name && password && rePassword)} margin="61px" onClick={CheckPw}>
              확인
            </_.Button>
          </_.Wrapper>
        </_.Container>
      </_.Background>
    </>
  );
};

export default SignUp
