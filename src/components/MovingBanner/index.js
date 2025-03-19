import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 90%;
  overflow: hidden;
  background: ${({ theme }) => theme.card};
  padding: 20px 0;
  position: relative;
  margin: 100px auto;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border: 0.1px solid #854CE6;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.card} 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.card} 0%, transparent 100%);
  }
`;

const MovingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: moveText 100s linear infinite;
  padding-right: 50px;
  transform: translateX(0);

  @keyframes moveText {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const TextItem = styled.span`
  padding: 12px 24px;
  margin: 0 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.05);
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const MovingBanner = ({ text }) => {
  const textArray = text.split('•').map(item => item.trim());
  const repeatedTextArray = [...textArray, ...textArray, ...textArray, ...textArray];
  
  return (
    <BannerContainer>
      <MovingText>
        {repeatedTextArray.map((item, index) => (
          <TextItem key={index}>{item}</TextItem>
        ))}
      </MovingText>
    </BannerContainer>
  );
};

export default MovingBanner; 