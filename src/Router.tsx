import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Privacy from "./Components/Privacy";
=======
>>>>>>> Stashed changes
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import Privacy from "./Components/Privacy/Privacy";
import Certification from "./Components/SignUp/Certification";
import SignIn from "./Components/SignIn/SignIn";
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/Privacy" element={<Privacy />}></Route>
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
                <Route path="Certification" element={<Certification/>}></Route>
                <Route path="SignIn" element={<SignIn/>}></Route>
                {/*404page*/}
                <Route path="*" element="" />
            </Routes>
            <Footer />
        </>
    )
}

export default Router;