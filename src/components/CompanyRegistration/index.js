import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe } from 'react-icons/fa';
import DottedMap from 'dotted-map';

// --- Dotted Map SVG as background ---
const DOT_COLOR = '#C0C0C0';
const RED = '#E53935';
const map = new DottedMap({
  height: 120,
  grid: 'vertical',
  dotSize: 0.08,
});
map.addPin({
  lat: 18.1124,
  lng: 79.0193,
  svgOptions: { color: RED, radius: 0.64 },
});
map.addPin({
  lat: -37.8136,
  lng: 144.9631,
  svgOptions: { color: RED, radius: 0.64 },
});
const svgString = map.getSVG({
  radius: 0.08,
  color: DOT_COLOR,
  shape: 'circle',
  background: 'transparent',
});
const svgDataUrl = `url('data:image/svg+xml;utf8,${encodeURIComponent(svgString)}')`;
// --- End Dotted Map SVG ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: #000;
  color: #fff;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-image: ${svgDataUrl};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.text_secondary}, transparent);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.text_secondary}, transparent);
  }
`;

const Title = styled(motion.h2)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.text_secondary}, transparent);
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const RegistrationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
    grid-template-columns: 1fr;
  }
`;

const RegistrationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card}80;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  /* border: 0.1px solid ${({ theme }) => theme.text_secondary}; */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.text_secondary}20, transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.text_secondary}20;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const CardTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CardContent = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #C0C0C0;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const CompanyRegistration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container id="registration">
      <RegistrationGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <RegistrationCard variants={cardVariants}>
          <IconWrapper>
            <FaBuilding />
          </IconWrapper>
          <CardTitle>India</CardTitle>
          <CardContent>
            Instaise Technologies<br />
            Addr: D.no 1-8-6/1/A Metpally Town 2, Metpally, Jagityal District, Telangana, India, 505325<br />
            Corporate Identity Number: U72100TS2025PTC193828
          </CardContent>
        </RegistrationCard>
        <RegistrationCard variants={cardVariants}>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <CardTitle>Australia</CardTitle>
          <CardContent>
            Nexzap Solutions<br />
            ABN: 40 682 721 811
          </CardContent>
        </RegistrationCard>
      </RegistrationGrid>
    </Container>
  );
};

export default CompanyRegistration; 