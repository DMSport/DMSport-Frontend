import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import NoticePage from "./Pages/NoticePage";
import Main from "./Pages/main";
import MyPage from "./Pages/MyPage";
import ClubPage from "./Components/Club/ClubPage";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        {/*404page*/}
        <Route path="/notice" element={<NoticePage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/club">
          <Route
            path="/club/soccer"
            element={<ClubPage clubName={"soccer"} />}
          />
          <Route
            path="basketball"
            element={<ClubPage clubName={"basketball"} />}
          />
          <Route
            path="badminton"
            element={<ClubPage clubName={"badminton"} />}
          />
          <Route
            path="volleyball"
            element={<ClubPage clubName={"volleyball"} />}
          />
        </Route>
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
