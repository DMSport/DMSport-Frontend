import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import NoticePage from "./Pages/NoticePage/NoticePage";
import Main from "./Pages/main";
import MyPage from "./Pages/MyPage/MyPage";
import ClubPage from "./Components/Club/ClubPage";
import AdminPage from "./Pages/adminpage/adminPage";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        {/*404page*/}
        <Route path="/notice" element={<NoticePage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/club">
          <Route path="soccer" element={<ClubPage clubName={"soccer"} />} />
          <Route path="basketball" element={<ClubPage clubName={"basketball"} />} />
          <Route path="badminton" element={<ClubPage clubName={"badminton"} />} />
          <Route path="volleyball" element={<ClubPage clubName={"volleyball"} />} />
        </Route>
        <Route path="/adminpage" element={<AdminPage aside="SearchUser" />} />
        <Route path="/adminpage/banpage" element={<AdminPage aside="ClubBan" />} />
        <Route path="/adminpage/noticepage" element={<AdminPage aside="AdminNotice" />} />
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
