import React from 'react';
import styled from 'styled-components';

const TrustedClientsContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

// Turn card into clickable <a> instead of <div>
const ClientCard = styled.a`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 10px 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ClientName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;

   &:hover{
    cursor: pointer;
  }
`;

const ClientDescription = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TrustedClients = () => {
  const clients = [
    {
      name: "Lucas Restaurants",
    },
    {
      name: "Wooing LLC",
    },
    {
      name: "Donbossco Pty Ltd",
    },
    {
      name: "VR Visual Magics",
    },
    {
      name: "VDMR PTY LTD",
    }
  ];

  return (
    <TrustedClientsContainer id="trusted-clients">
      <Container>
        <SectionTitle>Trusted Clients</SectionTitle>
        <SectionSubtitle>
          We're proud to work with industry leaders who trust us to deliver innovative solutions 
          that drive their business forward.
        </SectionSubtitle>
        
        <ClientsGrid>
          {clients.map((client, index) => (
            <ClientCard
              key={index}
            >
              <ClientName>{client.name}</ClientName>
            </ClientCard>
          ))}
        </ClientsGrid>
      </Container>
    </TrustedClientsContainer>
  );
};

export default TrustedClients; 
