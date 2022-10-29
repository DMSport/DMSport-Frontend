import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
<<<<<<< HEAD
import Certification from "./Components/SignUp/Certification";
import SignIn from "./Components/SignIn/SignIn";
import Main from "./Pages/main";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        <Route path="Certification" element={<Certification />}></Route>
        <Route path="SignIn" element={<SignIn />}></Route>
        {/*404page*/}
        <Route path="*" element="" />
      </Routes>
      <Footer />
    </>
  );
=======

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/Privacy" element={<Privacy />}></Route>
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
                {/*404page*/}
                <Route path="*" element="" />
            </Routes>
            <Footer />
        </>
    )
>>>>>>> main
}

export default Router;
