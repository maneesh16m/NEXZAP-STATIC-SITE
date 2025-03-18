import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ count }) =>
    count === 1 ? '1fr' : count === 2 ? 'repeat(2, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: 20px;
  width: ${({ count }) => (count === 1 ? '400px' : '80%')};
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
`;

const PartnerCard = styled.div`
  background-color: #111;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const PartnerName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const PartnerLink = styled.a`
  color: #1e90ff;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

const partners = [
  { name: "Donbossco Private Limited", link: "http://goflexer.com.au/" }
];

const Partners = () => {
  return (
    <Container>
      <Title>Our Partners</Title>
      <PartnersGrid count={partners.length}>
        {partners.map((partner, index) => (
          <PartnerCard key={index}>
            <PartnerName>{partner.name}</PartnerName>
            <PartnerLink href={partner.link} target="_blank" rel="noopener noreferrer">
              Visit Website <FaExternalLinkAlt />
            </PartnerLink>
          </PartnerCard>
        ))}
      </PartnersGrid>
    </Container>
  );
};

export default Partners;
