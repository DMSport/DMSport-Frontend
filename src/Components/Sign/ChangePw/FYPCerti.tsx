import { useRef, useState, useEffect } from "react";
import * as _ from "../SignIn.style"
import axios from "axios"
import ToastError from "../../../Utils/Function/ErrorMessage"
import ToastSuccess from "../../../Utils/Function/SuccessMessage"
import { useSetRecoilState } from 'recoil';
import { ChangeModal, Email } from '../../../Store/atoms';

const FYPCerti = () => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [OKCerti, setOKCerti] = useState(false)
    const setEmailRecoil = useSetRecoilState(Email);
    const setChangeModalValue = useSetRecoilState(ChangeModal);
    const [inputs, setInputs] = useState({
        email: "",
        auth_code: "",
    });

    const { email, auth_code } = inputs;

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

    //수정 필요
    const EmailCode = () => {
        setOKCerti(true)
        ToastSuccess("인증번호가 전송되었습니다.")
        axios.post(process.env.REACT_APP_BASE_URL + `users/mail/find`, { "email": email })
            .then(() => {
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 400:
                            return ToastError("이메일을 다시 확인해주세요.");
                        case 500:
                            return ToastError("관리자에게 문의해주세요");
                        default:
                            ToastError("네트워크 연결을 확인해주세요.");
                    }
                } else {
                    ToastError("네트워크 연결을 확인해주세요.");
                }
                setOKCerti(false)
            })
    }

    const CertiEmail = () => {
        axios.post(process.env.REACT_APP_BASE_URL + `users/mail/verify`, inputs)
            .then(() => {
                setEmailRecoil(email)
                ToastSuccess("인증되었습니다.")
                setChangeModalValue("ChangePw")
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 401:
                            return ToastError("인증코드가 잘못되었습니다.");
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
            <_.Background ref={ModalCheck} onClick={(e) => {
                if (ModalCheck.current === e.target) {
                    setChangeModalValue("")
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>인증하기</_.TitleText>
                        <_.CertiWrapper>
                            <_.TextInput name="email" onChange={onChange} disabled={OKCerti} width="193px" value={email} type="text" placeholder="이메일을 입력해주세요" />
                            <_.Button onClick={EmailCode} disabled={!(email) || OKCerti} width="70px" height="45px" radius="10px" margin="0 0 0 12px">인증</_.Button>
                        </_.CertiWrapper>
                        {OKCerti && (<_.TextInput name="auth_code" onChange={onChange} value={auth_code} type="text" placeholder="인증번호를 입력해주세요" />)}
                        <_.Button id="Certi" margin={OKCerti ? "120px 0 0 0" : "180px 0 0 0"} disabled={!(email && auth_code)} onClick={CertiEmail}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default FYPCerti