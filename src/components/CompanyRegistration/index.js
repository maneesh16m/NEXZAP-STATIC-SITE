import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe } from 'react-icons/fa';

// Toggle to enable the dotted world map background (dynamic import when true)
const ENABLE_DOTTED_MAP = false;
const DOT_COLOR = '#C0C0C0';
const RED = '#E53935';

// Animation for sliding the map horizontally
const slide = keyframes`
  0% { background-position-x: 0; }
  100% { background-position-x: -900px; }
`;

const MapBackground = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-image: var(--map-bg);
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  opacity: 0.7;
  animation: ${slide} 40s linear infinite;
`;

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

  const [mapCssValue, setMapCssValue] = useState('none');

  useEffect(() => {
    if (!ENABLE_DOTTED_MAP) return;
    let isMounted = true;
    const generate = async () => {
      const { default: DottedMap } = await import('dotted-map');
      const map = new DottedMap({ height: 200, grid: 'vertical', dotSize: 0.08 });
      map.addPin({ lat: 18.1124, lng: 79.0193, svgOptions: { color: RED, radius: 1.28 } });
      map.addPin({ lat: -37.8136, lng: 144.9631, svgOptions: { color: RED, radius: 1.28 } });
      const svgString = map.getSVG({ radius: 0.08, color: DOT_COLOR, shape: 'circle', background: 'transparent' });
      if (isMounted) setMapCssValue(`url('data:image/svg+xml;utf8,${encodeURIComponent(svgString)}')`);
    };
    // Defer to idle time if available
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => generate());
    } else {
      setTimeout(generate, 0);
    }
    return () => { isMounted = false; };
  }, []);

  return (
    <Container id="registration">
      <MapBackground style={{ '--map-bg': mapCssValue }} />
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
            Instaise Technologies Pvt Ltd<br />
            Addr: D.no 1-8-6/1/A, Metpally, Jagityal District, Telangana, India, 505325<br />
            Corporate Identity Number: U72100TS2025PTC193828
          </CardContent>
        </RegistrationCard>
        <RegistrationCard variants={cardVariants}>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <CardTitle>Australia</CardTitle>
          <CardContent>
            Nexzap Solutions Pty Ltd<br />
            ABN: 40 682 721 811
          </CardContent>
        </RegistrationCard>
      </RegistrationGrid>
    </Container>
  );
};

export default CompanyRegistration; 