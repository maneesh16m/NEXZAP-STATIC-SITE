import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe } from 'react-icons/fa';

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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #854CE6, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #854CE6, transparent);
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
    background: linear-gradient(to right, transparent, #854CE6, transparent);
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const RegistrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  background: ${({ theme }) => theme.card};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 0.1px solid #854CE6;
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
    background: linear-gradient(45deg, transparent, rgba(133, 76, 230, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(133, 76, 230, 0.2);
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
  color: #854CE6;
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
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Company Registration
      </Title>
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
            Founded in 2025, INSTAISE TECHNOLOGIES PTY LTD.
            <br />
            CIN: U72100TS2025PTC193828
          </CardContent>
        </RegistrationCard>
        <RegistrationCard variants={cardVariants}>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <CardTitle>Australia</CardTitle>
          <CardContent>
          Founded in 2024, NEXZAP SOLUTIONS PTY LTD.
          </CardContent>
        </RegistrationCard>
      </RegistrationGrid>
    </Container>
  );
};

export default CompanyRegistration; 