import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Logo } from "../Assets/SVG/Logo";
import MyPageImg from "../Assets/SVG/MypageImg.svg";
import MyButton from "../Components/My/Button/MyButton";
import Photo from "../Components/My/Photo/Photo";
import Title from "../Components/My/Title/Title";
import api from "../Utils/api/my";

const MyPage = () => {
  const { data } = useQuery(["myInfo"], api.getMyInfo);

  return (
    <MyPageContainer>
      <BackImg src={MyPageImg} />
      <Name>{data?.data.name}</Name>
      <Auth>{data?.data.authority}</Auth>
      <Hider>
        <ButtonWrapper>
          <MyButton type="changepw" color="#888888" content="비밀번호 변경"></MyButton>
          <MyButton type="logout" color="#FF6060" content="로그아웃"></MyButton>
          <MyButton type="deleteuser" color="#FF6060" content="회원 탈퇴"></MyButton>
        </ButtonWrapper>
        <PhotoWrapper>
          <Logo width={200} height={200}></Logo>
          <Title />
        </PhotoWrapper>
        <Photo></Photo>
      </Hider>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const Name = styled.div`
  position: absolute;
  top: 180px;
  left: 150px;
  display: flex;
  font-size: 50px;
  font-weight: bold;
  color: black;
  position: absolute;
`;

const Auth = styled.div`
  position: absolute;
  top: 200px;
  left: 290px;
  font-size: 30px;
  font-weight: 600;
  color: #737373;
`;

const BackImg = styled.img`
  width: 100vw;
  margin-top: 60px;
  z-index: 0;
`;

const Hider = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 44vw;
  background-color: #ecfffe;
  border-radius: 50px 50px 0px 0px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 20%;
`;

const PhotoWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;
