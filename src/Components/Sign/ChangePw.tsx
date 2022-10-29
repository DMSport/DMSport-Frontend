import { useRef, useState } from "react";
import * as _ from "./SignIn.style"
import CloseEye from "../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../Assets/SVG/OpenEye.svg"

interface ModalProps {
    setChangePwModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePw = ({ setChangePwModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [pwType, setPwType] = useState(true)
    const [newPwType, setNewPwType] = useState(true)
    const [reNewPwType, setReNewPwType] = useState(true)
    const [inputs, setInputs] = useState({
        pw: "",
        newPw: "",
        reNewPw: ""
    });

    const { pw, newPw, reNewPw } = inputs;

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
                    setChangePwModal(false)
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>시작하기</_.TitleText>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="pw" onChange={onInputChange} value={pw} type={pwType ? "password" : "text"} placeholder="기존 비밀번호를 입력해주세요." />
                            <_.Eye width="25px" height="25px" src={pwType ? OpenEye : CloseEye} onClick={() => {setPwType(!pwType)}}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="newPw" onChange={onInputChange} value={newPw} type={newPwType ? "password" : "text"} placeholder="새로운 비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={newPwType ? OpenEye : CloseEye} onClick={() => { setNewPwType(!newPwType) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="reNewPw" onChange={onInputChange} value={reNewPw} type={reNewPwType ? "password" : "text"} placeholder="새로운 비밀번호를 재입력해주세요" />
                            <_.Eye width="25px" height="25px" src={reNewPwType ? OpenEye : CloseEye} onClick={() => {setReNewPwType(!reNewPwType)}}></_.Eye>
                        </div>
                        <_.Button disabled={!(newPw && pw && reNewPw)} margin="61px" onClick={() => { setChangePwModal(false) }}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default ChangePw