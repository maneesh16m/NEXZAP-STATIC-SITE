import { ThemeProvider } from "styled-components";
import { useState, useEffect, Suspense, lazy } from "react";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar/index.js";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";

// Import all components directly for immediate loading
import HeroSection from "./components/HeroSection";
import ScrollProgress from './components/ScrollProgress';

// Defer below-the-fold sections to reduce initial bundle
const Products = lazy(() => import("./components/NexzapProducts/index.js"));
const NexzapServices = lazy(() => import("./components/NexzapServices/index.js"));
const Footer = lazy(() => import("./components/Footer"));
const Wallet = lazy(() => import("./pages/Wallet"));
const Privatebot = lazy(() => import("./pages/Privatebot"));
const Tagflo = lazy(() => import("./pages/Tagflo"));
const MovingBanner = lazy(() => import("./components/MovingBanner"));
const CompanyRegistration = lazy(() => import("./components/CompanyRegistration/index.js"));
const TrustedClients = lazy(() => import("./components/TrustedClients/index.js"));
const Contact = lazy(() => import("./components/Contact"));

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
                <Suspense fallback={null}>
                  <Wrapper>
                    <Products />
                  </Wrapper>
                  <MovingBanner text="Software Development • AI Solutions • Custom Applications • Cloud Services • App Development • UI/UX Design • SaaS Products • Web Development • WALLET Gift Cards • TAGFLO RFID • PRIVATEBOT" />
                  <Wrapper2>
                    <NexzapServices openModal={openModal} setOpenModal={setOpenModal} />
                  </Wrapper2>
                  <Wrapper>
                    <TrustedClients />
                  </Wrapper>
                  <Wrapper>
                    <CompanyRegistration />
                  </Wrapper>
                  <Wrapper>
                    <Contact />
                  </Wrapper>
                </Suspense>
              </>
            } />
            <Route path="/wallet" element={<Suspense fallback={null}><Wallet /></Suspense>} />
            <Route path="/privatebot" element={<Suspense fallback={null}><Privatebot /></Suspense>} />
            <Route path="/tagflo" element={<Suspense fallback={null}><Tagflo /></Suspense>} />
          </Routes>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;