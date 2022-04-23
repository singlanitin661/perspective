import About from "./components/About/About";
import CallForPapersHomePage from "./components/CallForPapersHomePage";
import CallForPapersNavbar from "./components/CallForPapersNavbar";
import ConferenceCommittee from "./components/ConferenceCommittee";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header";
import ImportantDetails from "./components/ImportantDetails";
import Login from "./components/Login";
import Sponsers from "./components/Sponsers";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <About /> */}
      <CallForPapersNavbar />
      <ImportantDetails />
      <Contact />
      <Login />
      <Carousel />
      <Sponsers />
      <ConferenceCommittee />
      <CallForPapersHomePage />
    </div>
  );
}

export default App;
