import * as S from "./style"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
    <>
    <S.Wrapper>
        <div>
            <S.TitleText>DMSport</S.TitleText>
            <S.LogoText>@ DMSport</S.LogoText>
        </div>
        <S.Text><Link to="/Privacy">개인정보 처리방침</Link> ㅣ <Link to="/PrivacyPolicy">이용약관</Link> <br/>(34111) 대전광역시 유성구 가정북로 76(장동 23-9) <br/>교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax : 042-863-4308</S.Text>
    </S.Wrapper>
    </>
    )
}

export default Footer