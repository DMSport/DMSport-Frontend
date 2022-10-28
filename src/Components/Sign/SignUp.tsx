import { useRef, useState } from "react";
import CloseEye from "../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../Assets/SVG/OpenEye.svg"
import * as _ from "./SignIn.style"

interface ModalProps {
    setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Certification = ({ setSignUpModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [Type, setType] = useState({
        PwType: "password",
        RePwType: "password"
    });
    const [inputs, setInputs] = useState({
        name: "",
        pw: "",
        rePw: ""
    });

    const { name, pw, rePw } = inputs;
    const { PwType, RePwType } = Type;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    setSignUpModal(false)
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>시작하기</_.TitleText>
                        <_.TextInput name="name" onChange={onInputChange} value={name} type="text" placeholder="이름(실명)을 입력해주세요." />
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="pw" onChange={onInputChange} value={pw} type={Type.PwType} placeholder="비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={(PwType === "password") ? OpenEye : CloseEye} onClick={() => { setType((PwType === "password") ? { PwType: "text", RePwType: RePwType } : { PwType: "password", RePwType: RePwType }) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="rePw" onChange={onInputChange} value={rePw} type={Type.RePwType} placeholder="비밀번호를 재입력해주세요" />
                            <_.Eye width="25px" height="25px" src={(RePwType === "password") ? OpenEye : CloseEye} onClick={() => { setType((Type.RePwType === "password") ? { PwType: PwType, RePwType: "text" } : { PwType: PwType, RePwType: "password" }) }}></_.Eye>
                        </div>
                        <_.Button disabled={!(name && pw && rePw)} margin="61px" onClick={() => { setSignUpModal(false) }}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default Certification