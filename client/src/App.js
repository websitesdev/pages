import About from "./components/About";
import AboutUS from "./components/AboutUS";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomePage } from "./components/HomePage";
import OurService from "./components/OurService";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <About />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
        <Contact/>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
