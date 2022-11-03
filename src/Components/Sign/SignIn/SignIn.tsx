import { useRef, useState, useEffect } from "react";
import * as _ from "../SignIn.style"
import CloseEye from "../../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../../Assets/SVG/OpenEye.svg"
import axios from "axios";
import ToastError from "../../../Utils/Function/ErrorMessage"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { Cookies } from "react-cookie";

interface ModalProps {
    setSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
    setCertifiModal: React.Dispatch<React.SetStateAction<boolean>>;
    setFYPCertiModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ setFYPCertiModal, setSignInModal, setCertifiModal }: ModalProps) => {
    const cookies = new Cookies()
    const ModalCheck = useRef<HTMLDivElement>(null);
    const [pwType, setPwType] = useState({
        type: "password",
    });
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const SignInModalDown = () => {
        setSignInModal(false)
    }

    const { type } = pwType;

    const SignIn = () => {
        axios.post(process.env.REACT_APP_BASE_URL + `users/auth`, inputs)
            .then((response) => {
                const { access_token, refresh_token, authority } = response.data
                localStorage.setItem("access_token", access_token)
                cookies.set("refresh_token", refresh_token,)
                localStorage.setItem("authority", authority)
                Swal.fire(
                    '로그인 성공',
                    '로그인에 성공하셨습니다.',
                    'success'
                )
                navigate("/")
                SignInModalDown()
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 400:
                            return ToastError("관리자에게 문의해주세요");
                        case 404:
                            return ToastError("계정을 찾을 수 없습니다");
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
            <_.Background ref={ModalCheck} onClick={(e) => {
                if (ModalCheck.current === e.target) {
                    SignInModalDown()
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>로그인</_.TitleText>
                        <_.TextInput name="email" onChange={onChange} value={email} type="text" placeholder="이메일을 입력해주세요" />
                        <div>
                            <_.TextInput name="password" onChange={onChange} value={password} type={type} placeholder="비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={(type === "password") ? OpenEye : CloseEye} onClick={() => { setPwType((type === "password") ? { type: "text" } : { type: "password" }) }}></_.Eye>
                        </div>
                        <_.FYP onClick={() => { setFYPCertiModal(true); SignInModalDown() }}>비밀번호를 잊으셨나요?</_.FYP>
                        <_.Button disabled={!(email && password)} onClick={SignIn}>확인</_.Button>
                        <_.SignUpText onClick={() => { setCertifiModal(true); SignInModalDown() }}>회원가입</_.SignUpText>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}


export default SignIn;
