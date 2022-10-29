import { useRef, useState } from "react";
import * as _ from "./SignIn.style"

interface ModalProps {
    setCertiModal: React.Dispatch<React.SetStateAction<boolean>>;
    setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Certification = ({ setCertiModal, setSignUpModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [OKCerti, setOKCerti] = useState(false)
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

    return (
        <>
            <_.Background ref={ModalCheck} onClick={(e) => {
                if (ModalCheck.current === e.target) {
                    setCertiModal(false)
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>인증하기</_.TitleText>
                        <_.CertiWrapper>
                            <_.TextInput name="email" onChange={onChange} disabled={OKCerti} width="193px" value={email} type="text" placeholder="이메일을 입력해주세요" />
                            <_.Button onClick={() => { setOKCerti(true) }} disabled={!(email) || OKCerti} width="70px" height="45px" radius="10px" margin="0 0 0 12px">인증</_.Button>
                        </_.CertiWrapper>
                        {OKCerti && (<_.TextInput name="pw" onChange={onChange} value={pw} type="text" placeholder="인증번호를 입력해주세요" />)}
                        <_.Button id="Certi" margin={OKCerti ? "120px 0 0 0" : "180px 0 0 0"} disabled={!(email && pw)} onClick={() => { setCertiModal(false); setSignUpModal(true) }}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default Certification