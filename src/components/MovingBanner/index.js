import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 90%;
  overflow: hidden;
  background: #111111;
  padding: 15px 0;
  position: relative;
  margin: 40px 0;
  border-radius: 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #111111 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #111111 0%, transparent 100%);
  }
`;

const MovingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: moveText 80s linear infinite;
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
`;

const TextItem = styled.span`
  padding: 8px 20px;
  margin: 0 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 16px;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  display: inline-block;
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