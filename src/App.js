import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar/index.js";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Products  from "./components/NexzapProducts/index.js";
import NexzapServices from "./components/NexzapServices/index.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";
import Wallet from "./pages/Wallet";
import Privatebot from "./pages/Privatebot";
import Tagflo from "./pages/Tagflo";
import MovingBanner from "./components/MovingBanner";
import ScrollProgress from './components/ScrollProgress';
import CompanyRegistration from "./components/CompanyRegistration/index.js";

const Body = styled.div`
  background-color: #000000;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  background-color: #000000;
  width: 100%;
`;

const Wrapper2 = styled.div`
  background-color: #000000;
  width: 100%;
`;


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Body>
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Wrapper>
                  <Products />
                </Wrapper>
                <MovingBanner text="Software Development • AI Solutions • Custom Applications • Cloud Services • App Development • UI/UX Design • SaaS Products • Web Development • WALLET Gift Cards • TAGFLO RFID • PRIVATEBOT" />
                <Wrapper2>
                  <NexzapServices openModal={openModal} setOpenModal={setOpenModal} />
                </Wrapper2>
                <Wrapper>
                  <CompanyRegistration />
                </Wrapper>
                <Wrapper>
                  <Contact />
                </Wrapper>
              </>
            } />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/privatebot" element={<Privatebot />} />
            <Route path="/tagflo" element={<Tagflo />} />
          </Routes>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;