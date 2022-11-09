import { useRef, useState, useEffect } from "react";
import { useRecoilValue } from 'recoil';
import { Email } from '../../../Store/atoms';
import * as _ from "../SignIn.style"
import CloseEye from "../../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../../Assets/SVG/OpenEye.svg"
import axios from "axios"
import ToastError from "../../../Utils/Function/ErrorMessage"
import Swal from "sweetalert2"

interface ModalProps {
    setChangePwModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePw = ({ setChangePwModal }: ModalProps) => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [newPwType, setNewPwType] = useState(true)
    const [reNewPwType, setReNewPwType] = useState(true)
    const emailRecoil = useRecoilValue(Email)
    const [inputs, setInputs] = useState({
        newPw: "",
        reNewPw: ""
    });

    const { newPw, reNewPw } = inputs;

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
        if (newPw === reNewPw) {
            ChangePwAPI()
        }
        else {
            ToastError("비밀번호가 일치하지 않습니다.")
        }
    }

    //수정 필요
    const ChangePwAPI = () => {
        axios.put(process.env.REACT_APP_BASE_URL + `users/password`, { "new_password": newPw, "email": emailRecoil})
            .then(() => {
                Swal.fire(
                    '비밀번호 번경 성공',
                    '비밀번호가 성공적으로 변경되었습니다.',
                    'success'
                )
                setChangePwModal(false)
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 401:
                            return ToastError("이메일을 다시 확인해주세요.");
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
                    setChangePwModal(false)
                }
            }}>
                <_.Container>
                    <_.Wrapper>
                        <_.TitleText>시작하기</_.TitleText>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="newPw" onChange={onInputChange} value={newPw} type={newPwType ? "password" : "text"} placeholder="새로운 비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={newPwType ? OpenEye : CloseEye} onClick={() => { setNewPwType(!newPwType) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="reNewPw" onChange={onInputChange} value={reNewPw} type={reNewPwType ? "password" : "text"} placeholder="새로운 비밀번호를 재입력해주세요" />
                            <_.Eye width="25px" height="25px" src={reNewPwType ? OpenEye : CloseEye} onClick={() => { setReNewPwType(!reNewPwType) }}></_.Eye>
                        </div>
                        <_.Button margin="120px 61px 61px 61px" disabled={!(newPw && reNewPw)} onClick={CheckPw}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default ChangePw

