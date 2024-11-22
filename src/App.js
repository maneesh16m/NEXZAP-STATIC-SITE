import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
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

const Body = styled.div`
  background-color: #000000;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

// const Wrapper1 = styled.div`
//   background: linear-gradient(38.73deg, rgba(201, 32, 184, 0) 50%);
//   width: 100%;
// `

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
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Wrapper>
                  <Products />
                </Wrapper>
                <Wrapper2>
                  <NexzapServices openModal={openModal} setOpenModal={setOpenModal} />
                </Wrapper2>
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