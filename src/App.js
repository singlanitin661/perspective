import About from "./components/About/About";
import CallForPapersHomePage from "./components/CallForPapersHomePage";
import CallForPapersNavbar from "./components/CallForPapersNavbar/CallForPapersNavbar";
import ConferenceCommittee from "./components/ConferenceCommittee";
import Contact from "./components/Contact";
import Corousal from "./components/Carousel/Carousel";
import Header from "./components/Header";
import ImportantDetails from "./components/ImportantDetails";
import Login from "./components/Login";
import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CallForPapersNavbar />
      <ImportantDetails />
      <Contact />
      <Login />
      <Corousal />
      <Sponsers />
      <ConferenceCommittee />
      <CallForPapersHomePage />
      <Footer />
    </div>
  );
}

export default App;
