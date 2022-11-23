import { useState } from "react";
import * as _ from "./BanPage.style"
import SoccerImg from "../../../Assets/SVG/Soccer.svg"
import BasketballImg from "../../../Assets/SVG/Basketball.svg"
import BadmintonImg from "../../../Assets/SVG/Badminton.svg"
import VolleyballImg from "../../../Assets/SVG/Volleyball.svg"
import axios from "axios";
import ToastError from "../../../Utils/Function/ErrorMessage";
import Swal from "sweetalert2";


interface IMenu {
    title: string;
    name: string;
    url: string;
    value: string;
}

const BanPage = ({ margin }: { margin: boolean }) => {
    const [inputs, setInputs] = useState({
        SOCCER: '',
        BASKETBALL: '',
        BADMINTON: '',
        VOLLEYBALL: ''
    });

    const { SOCCER, BASKETBALL, BADMINTON, VOLLEYBALL } = inputs;

    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const clubCard: IMenu[] = [
        { name: "SOCCER", title: "축구부", url: SoccerImg, value: SOCCER },
        { name: "BASKETBALL", title: "농구부", url: BasketballImg, value: BASKETBALL },
        { name: "BADMINTON", title: "배드민턴부", url: BadmintonImg, value: BADMINTON },
        { name: "VOLLEYBALL", title: "배구부", url: VolleyballImg, value: VOLLEYBALL },
    ];

    const BanAPI = (e: any) => {
        const { value, name } = e.target
        axios
            .patch(process.env.REACT_APP_BASE_URL + `admin/ban`,
                { "club_type": name, "ban_period": value },
                { headers: { Authorization: ` Bearer ${localStorage.getItem("access_token")}` } })
            .then((response) => {
                Swal.fire(
                    '정지 성공',
                    `${value}일까지 해당 클럽이 정지됩니다.`,
                    'success'
                )
            })
            .catch((e) => {
                if (axios.isAxiosError(e) && e.response) {
                    switch (e.response.status) {
                        case 400:
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
        <_.Container margin={margin}>
            {clubCard.map((res, i) => {
                return (
                    <_.Wrapper key={i}>
                        <_.Img src={res.url}></_.Img>
                        <_.Text>{res.title}</_.Text>
                        <_.BtnWrapper>
                            <_.TimeInput
                                data-placeholder="정지 종료일"
                                required
                                aria-required="true"
                                type="date"
                                name={res.name}
                                value={res.value}
                                onChange={onChangeDate}>
                            </_.TimeInput>
                            <_.BanBtn
                                disabled={!res.value}
                                name={res.name}
                                value={res.value}
                                onClick={BanAPI}>
                                정지
                            </_.BanBtn>
                        </_.BtnWrapper>
                    </_.Wrapper>
                )
            })}
        </_.Container>
    )
}

export default BanPage