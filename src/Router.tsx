import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
<<<<<<< Updated upstream
import NoticePage from "./Pages/NoticePage";
=======
import Certification from "./Components/Sign/Certification";
import SignIn from "./Components/Sign/SignIn";
import Main from "./Pages/main";
>>>>>>> Stashed changes

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        {/*404page*/}
        <Route path="/notice" element={<NoticePage />}></Route>
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
