import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  min-height: calc(100vh - 160px); // Subtract navbar and footer height
  justify-content: center; // Center content vertically
`;

export const ProductTitle = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const ProductFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const FeatureItem = styled.li`
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    z-index: 100;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        top: 10px;
        right: 10px;
        font-size: 20px;
    }
`;