import { useQuery } from "@tanstack/react-query";
import * as _ from "./MyPage.style";
import { Logo } from "../../Assets/SVG/Logo";
import MyPageImg from "../../Assets/SVG/MypageImg.svg";
import MyButton from "../../Components/My/Button/MyButton";
import Photo from "../../Components/My/Photo/Photo";
import Title from "../../Components/My/Title/Title";
import api from "../../Utils/api/my";

const MyPage = () => {
  const { data } = useQuery(["myInfo"], api.getMyInfo);

  return (
    <_.MyPageContainer>
      <_.BackImg src={MyPageImg} />
      <_.Name>{data?.data.name}</_.Name>
      <_.Auth>{data?.data.authority}</_.Auth>
      <_.Hider>
        <_.ButtonWrapper>
          <MyButton type="changepw" color="#888888" content="비밀번호 변경"></MyButton>
          <MyButton type="logout" color="#FF6060" content="로그아웃"></MyButton>
          <MyButton type="deleteuser" color="#FF6060" content="회원 탈퇴"></MyButton>
        </_.ButtonWrapper>
        <_.PhotoWrapper>
          <Logo width={200} height={200}></Logo>
          <Title />
        </_.PhotoWrapper>
        <Photo></Photo>
      </_.Hider>
    </_.MyPageContainer>
  );
};

export default MyPage;
