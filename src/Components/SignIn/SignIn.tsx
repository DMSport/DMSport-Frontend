import { useRef, useState } from "react";
import * as _ from "./SignIn.style"

interface ModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    modal: boolean;
}

type onChange = {
    value : string;
    name : string;
}

const SignIn = ({ modal ,setModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
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

    const Disabled = !(email && pw);

    const ViewModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <_.Background ref={ModalCheck} onClick={(e) => {
                if (ModalCheck.current === e.target) {
                    setModal(false)
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>로그인</_.TitleText>
                        <_.TextInput name="email" onChange={onChange} value={email} type="text" placeholder="이메일을 입력해주세요" />
                        <_.TextInput name="pw" onChange={onChange} value={pw} type="text" placeholder="비밀번호를 입력해주세요" />
                        <_.FYP>비밀번호를 잊으셨나요?</_.FYP>
                        <_.Button disabled={Disabled}>확인</_.Button>
                        <_.SignUpText>회원가입</_.SignUpText>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default SignIn