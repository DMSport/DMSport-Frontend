import { useRef, useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ChangeModal, Email } from '../../../Store/atoms';
import * as _ from "../../Sign/SignIn.style"
import CloseEye from "../../../Assets/SVG/CloseEye.svg"
import OpenEye from "../../../Assets/SVG/OpenEye.svg"
import axios from "axios"
import ToastError from "../../../Utils/Function/ErrorMessage"
import Swal from "sweetalert2"

const ChangePwMy = () => {
    const ModalCheck = useRef<HTMLDivElement>(null)
    const [oldPwType, setOldPwType] = useState(true)
    const [newPwType, setNewPwType] = useState(true)
    const [reNewPwType, setReNewPwType] = useState(true)
    const setChangeModalValue = useSetRecoilState(ChangeModal);
    const [inputs, setInputs] = useState({
        old_password: "",
        new_password: "",
        reNew_password: ""
    });
    const { old_password, new_password, reNew_password } = inputs;

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
        if (new_password === reNew_password) {
            ChangePwAPI()
        }
        else {
            ToastError("비밀번호가 일치하지 않습니다.")
        }
    }

    //수정 필요
    const ChangePwAPI = () => {
        axios
            .patch(process.env.REACT_APP_BASE_URL + `users/password`,
                { "old_password": old_password, "new_password": new_password },
                { headers: { Authorization: ` Bearer ${localStorage.getItem("access_token")}` } })
            .then(() => {
                Swal.fire(
                    '비밀번호 번경 성공',
                    '비밀번호가 성공적으로 변경되었습니다.',
                    'success'
                )
                setChangeModalValue("")
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 400:
                            return ToastError("비밀번호를 규칙에 맞춰 입력해주세요.");
                        case 401:
                            return ToastError("비밀번호를 다시 확인해주세요.");
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
                        <_.TitleText>비밀번호 변경</_.TitleText>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="old_password" onChange={onInputChange} value={old_password} type={oldPwType ? "password" : "text"} placeholder="기존 비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={oldPwType ? OpenEye : CloseEye} onClick={() => { setOldPwType(!oldPwType) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="new_password" onChange={onInputChange} value={new_password} type={newPwType ? "password" : "text"} placeholder="새로운 비밀번호를 입력해주세요" />
                            <_.Eye width="25px" height="25px" src={newPwType ? OpenEye : CloseEye} onClick={() => { setNewPwType(!newPwType) }}></_.Eye>
                        </div>
                        <div>
                            <_.TextInput padding="15px 40px 15px 10px " name="reNew_password" onChange={onInputChange} value={reNew_password} type={reNewPwType ? "password" : "text"} placeholder="새로운 비밀번호를 재입력해주세요" />
                            <_.Eye width="25px" height="25px" src={reNewPwType ? OpenEye : CloseEye} onClick={() => { setReNewPwType(!reNewPwType) }}></_.Eye>
                        </div>
                        <_.Button margin="69px 61px 61px 61px" disabled={!(old_password && new_password)} onClick={CheckPw}>확인</_.Button>
                    </_.Wrapper>
                </_.Container>
            </_.Background>
        </>
    )
}

export default ChangePwMy