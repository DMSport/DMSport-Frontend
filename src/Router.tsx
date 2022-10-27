import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import Certification from "./Components/SignUp/Certification";

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/Privacy" element={<Privacy />}></Route>
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
                <Route path="Certification" element={<Certification/>}></Route>
                {/*404page*/}
                <Route path="*" element="" />
            </Routes>
            <Footer />
        </>
    )
}

export default Router;