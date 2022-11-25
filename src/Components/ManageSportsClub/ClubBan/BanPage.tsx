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

    let now_utc = Date.now()
    let timeOff = new Date().getTimezoneOffset()*60000;
    let today = new Date(now_utc-timeOff).toISOString().substring(0, 10);

    const CheckBan = (e:any) => {
        Swal.fire({
            title: '정말 해당 클럽을 정지 하시겠습니까?',
            text: '정지시키면 다시 되돌릴 수 없습니다.',
            icon: 'warning',
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            confirmButtonText: '정지', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
        }).then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                BanAPI(e)
            }
        });
    }

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
                                min={today}
                                onChange={onChangeDate}>
                            </_.TimeInput>
                            <_.BanBtn
                                disabled={!res.value}
                                name={res.name}
                                value={res.value}
                                onClick={CheckBan}>
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