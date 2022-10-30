import { useRef, useState, useEffect } from "react";
import CloseEye from "../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../Assets/SVG/OpenEye.svg"
import * as _ from "./SignIn.style"
import axios from "axios"

interface ModalProps {
    setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Certification = ({ setSignUpModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [pwType, setPwType] = useState(true)
    const [rePwType, setRePwType] = useState(true)
    const [inputs, setInputs] = useState({
        name: "",
        pw: "",
        rePw: ""
    });

    const { name, pw, rePw } = inputs;

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

    const SignUp = () => {
        axios.post(process.env.REACT_APP_BASE_URL + `user`, inputs)
        .then(() => {
            alert("인증되었습니다.")
        })
        .catch((error) => {
            alert("error")
        })
    }

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
                            <_.TextInput padding="15px 40px 15px 10px " name="pw" onChange={onInputChange} value={pw} type={pwType ? "password" : "text"} placeholder="비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={pwType ? OpenEye : CloseEye} onClick={() => { setPwType(!(pwType)) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="rePw" onChange={onInputChange} value={rePw} type={rePwType ? "password" : "text"} placeholder="비밀번호를 재입력해주세요" />
                            <_.Eye width="25px" height="25px" src={rePwType ? OpenEye : CloseEye} onClick={() => { setRePwType(!(rePwType)) }}></_.Eye>
                        </div>
                        <_.Button disabled={!(name && pw && rePw)} margin="61px" onClick={() => { setSignUpModal(false) }}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default Certification