import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import NoticePage from "./Pages/NoticePage";
import Main from "./Pages/main";
import MyPage from "./Pages/MyPage";

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
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
