import * as _ from "./Footer.style"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
    <>
    <_.Wrapper>
        <div>
            <_.TitleText>DMSport</_.TitleText>
            <_.LogoText>@ DMSport</_.LogoText>
        </div>
        <_.Text><Link to="/Privacy">개인정보 처리방침</Link> ㅣ <Link to="/PrivacyPolicy">이용약관</Link> <br/>(34111) 대전광역시 유성구 가정북로 76(장동 23-9) <br/>교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax : 042-863-4308</_.Text>
    </_.Wrapper>
    </>
    )
}

export default Footer