import About from "./components/About/About";
import CallForPapersHomePage from "./components/CallForPapersHomePage/CallForPapersHomePage";
import CallForPapersNavbar from "./components/CallForPapersNavbar/CallForPapersNavbar";
import ConferenceCommittee from "./components/ConferenceCommittee/ConferenceCommittee";
import Corousal from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Sponsers from "./components/Sponsers/Sponsers";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignUpDummy/Login";
import Register from "./components/LoginSignUpDummy/Register";
import Contact from "./components/Contact/Contact";
import CFP from "./components/CallForPapers/CFP";
import ImportantDetails from "./components/ImportantDetails/ImportantDetails";

function App() {
    return (
        <div className="App">
            <Router>
            <Header />
            <CallForPapersNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/cfp" element={<CFP />} />
                </Routes>
            </Router>

            <Footer />
        </div>
    );
}

export default App;

const Home = () => {
    return (
        <>
            <Corousal />
            <ImportantDetails />
            <About />
            <Sponsers />
            <ConferenceCommittee />
            <CallForPapersHomePage />
        </>
    );
};
