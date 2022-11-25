import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import NoticePage from "./Pages/NoticePage/NoticePage";
import Main from "./Pages/main";
import MyPage from "./Pages/MyPage/MyPage";
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
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/adminpage" element={<AdminPage aside="SearchUser" />} />
        <Route path="/adminpage/banpage" element={<AdminPage aside="ClubBan" />} />
        <Route path="/adminpage/noticepage" element={<AdminPage aside="AdminNotice" />} />
        {/* <Route
            path="basketball"
            element={<ClubPage clubName={"basketball"} />}
          /> */}
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;