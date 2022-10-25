import styled from "styled-components"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
    <>
    <Wrapper>
        <div>
            <TitleText>DMSport</TitleText>
            <LogoText>@ DMSport</LogoText>
        </div>
        <Text><Link to="/Privacy">개인정보 처리방침</Link> ㅣ <Link to="/PrivacyPolicy">이용약관</Link> <br/>(34111) 대전광역시 유성구 가정북로 76(장동 23-9) <br/>교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax : 042-863-4308</Text>
    </Wrapper>
    </>
    )
}

export default Footer

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    width: 100vw;
    height: 90px;
    background-color: black;
`

const LogoText = styled.div`
    color: white;
    font-size: 12px;
    `

const TitleText = styled.div`
    font-weight: 700;
    color: white;
    font-size: 28px;
`

const Text = styled.div`
    color : white;
    font-size: 12px;
`