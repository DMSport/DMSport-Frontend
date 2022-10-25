import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Privacy from "./Components/Privacy";

function Router() {
    return (
        <>
            <Header/>
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
}

export default Router;