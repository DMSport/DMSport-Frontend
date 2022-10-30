import { useRef, useState } from "react";
import * as _ from "./SignIn.style";
import CloseEye from "../../Assets/SVG/CloseEye.svg";
import OpenEye from "../../Assets/SVG/OpenEye.svg";

interface ModalProps {
  setSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCertifiModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFYPCertiModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ setFYPCertiModal, setSignInModal, setCertifiModal }: ModalProps) => {
  const ModalCheck = useRef<HTMLDivElement>(null);
  const [pwType, setPwType] = useState({
    type: "password",
  });
  const [inputs, setInputs] = useState({
    email: "",
    pw: "",
  });

  const { email, pw } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const SignInModalDown = () => {
    setSignInModal(false);
  };

  const { type } = pwType;

  return (
    <>
      <_.Background
        ref={ModalCheck}
        onClick={(e) => {
          if (ModalCheck.current === e.target) {
            SignInModalDown();
          }
        }}
      >
        <_.Container>
          <_.Wrapper>
            <_.TitleText>로그인</_.TitleText>
            <_.TextInput
              name="email"
              onChange={onChange}
              value={email}
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <div>
              <_.TextInput name="pw" onChange={onChange} value={pw} type={type} placeholder="비밀번호를 입력해주세요" />
              <_.Eye
                width="25px"
                height="25px"
                src={type === "password" ? OpenEye : CloseEye}
                onClick={() => {
                  setPwType(type === "password" ? { type: "text" } : { type: "password" });
                }}
              ></_.Eye>
            </div>
            <_.FYP
              onClick={() => {
                setFYPCertiModal(true);
                SignInModalDown();
              }}
            >
              비밀번호를 잊으셨나요?
            </_.FYP>
            <_.Button
              disabled={!(email && pw)}
              onClick={() => {
                SignInModalDown();
              }}
            >
              확인
            </_.Button>
            <_.SignUpText
              onClick={() => {
                setCertifiModal(true);
                SignInModalDown();
              }}
            >
              회원가입
            </_.SignUpText>
          </_.Wrapper>
        </_.Container>
      </_.Background>
    </>
  );
};

export default SignIn;
