import Menu from "../../Assets/SVG/Menu.svg";
import People from "../../Assets/SVG/people";
import Ban from "../../Assets/SVG/ban";
import WriteNotice from "../../Assets/SVG/writeNotice";
import { useRecoilState } from "recoil";
import { MenuAtom } from "../../Store/atoms";
import { useState } from "react";
import StudentSearch from "../../Components/ManageSportsClub/studentsearch/StudentSearch";
import { MenuType } from "../../Store/atoms";
import { useNavigate } from "react-router-dom";
import * as _ from "./adminPage.style";

interface IMenu {
  id: MenuType;
  title: string;
  url: string;
}

const AdminPage = ({ aside }: { aside: string }) => {
  const [select, setSelect] = useRecoilState(MenuAtom);
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const menu: IMenu[] = [
    { id: "STUDENT", title: "학생 찾기", url: "adminpage" },
    { id: "SPORTS", title: "스포츠 클럽 제재", url: "adminpage/banpage" },
    { id: "NOTICE", title: "전체 공지 작성", url: "adminpage/noticepage" },
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

  const asidepage = () => {
    switch (aside) {
      case "SearchUser":
        return <StudentSearch />;
      default:
        return null;
    }
  };

  return (
    <_.Container>
      <_.Img onClick={() => setClicked((prev) => !prev)} src={Menu} />
      <_.Aside x={clicked ? -100 : 0}>
        <_.Title>스포츠 클럽 관리</_.Title>
        <div>
          {menu.map((res) => {
            return (
              <_.Box
                key={res.id}
                onClick={() => {
                  Click(res.id);
                  navigate(`/${res.url}`);
                }}
                background={select === res.id}
              >
                <_.Margin>{MenuImg(res.id)}</_.Margin>
                <_.Text>{res.title}</_.Text>
              </_.Box>
            );
          })}
        </div>
      </_.Aside>
      {asidepage()}
    </_.Container>
  );
};

export default AdminPage;
