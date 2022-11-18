import styled from "styled-components";
import Menu from "../Assets/SVG/Menu.svg";
import People from "../Assets/SVG/people";
import Ban from "../Assets/SVG/ban";
import WriteNotice from "../Assets/SVG/writeNotice";
import { useRecoilState } from "recoil";
import { MenuAtom } from "../Store/atoms";
import { useState } from "react";
import StudentSearch from "../Components/ManageSportsClub/StudentSearch";
import { MenuType } from "../Store/atoms";

interface IMenu {
  id: MenuType;
  title: string;
}

const AdminPage = () => {
  const [select, setSelect] = useRecoilState(MenuAtom);
  const [clicked, setClicked] = useState<boolean>(false);
  const menu: IMenu[] = [
    { id: "STUDENT", title: "학생 찾기" },
    { id: "SPORTS", title: "스포츠 클럽 제재" },
    { id: "NOTICE", title: "전체 공지 작성" },
  ];

  const Click = (id: MenuType) => {
    setSelect(id);
  };

  const MenuImg = (id: MenuType) => {
    switch (id) {
      case "STUDENT":
        return <People color={select === id ? "white" : "#898A8D"} />;
      case "SPORTS":
        return <Ban color={select === id ? "white" : "#898A8D"} />;
      case "NOTICE":
        return <WriteNotice color={select === id ? "white" : "#898A8D"} />;
    }
  };

  return (
    <Container>
      <Img onClick={() => setClicked((prev) => !prev)} src={Menu} />
      <Aside x={clicked ? -100 : 0}>
        <Title>스포츠 클럽 관리</Title>
        <div>
          {menu.map((res) => {
            return (
              <Box onClick={() => Click(res.id)} background={select === res.id}>
                <Margin>{MenuImg(res.id)}</Margin>
                <Text>{res.title}</Text>
              </Box>
            );
          })}
        </div>
      </Aside>
      <StudentSearch />
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Aside = styled.div<{ x: number }>`
  position: absolute;
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.Black};
  transform: translateX(${(props) => props.x}%);
  transition: 0.5s;
`;

const Margin = styled.div`
  position: absolute;
  margin-left: 30px;
`;

const Img = styled.img`
  position: fixed;
  left: 30px;
  top: 18px;
  z-index: 99;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  left: 30px;
  top: 60px;
  font-size: 14px;
  color: #808080;
  font-weight: 600;
  margin-top: 10px;
`;

const Box = styled.div<{ background: boolean }>`
  display: flex;
  align-items: center;
  width: 250px;
  height: 55px;
  cursor: pointer;
  background-color: ${(props) => props.background && "#55acee"};
  color: #f1eeee;
  &:first-child {
    margin-top: 110px;
  }
`;

const Text = styled.div`
  margin-left: 75px;
  font-weight: 600;
  font-size: 18px;
`;
