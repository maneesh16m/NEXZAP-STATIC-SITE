import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProductPageContainer,
  ProductTitle,
  ProductDescription,
  ProductContent,
  ProductFeatures,
  FeatureItem,
  FeatureTitle,
  FeatureDescription
} from '../components/ProductPageStyles';
import { BackButton } from '../components/NexzapServices/ServiceStyle';

const Wallet = () => {
  const navigate = useNavigate();

  // Add useEffect for smooth scroll on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        ← Back
      </BackButton>
      <ProductPageContainer>
        <ProductContent>
          <ProductTitle>WALLET</ProductTitle>
          <ProductDescription>
            A custom-built gift card management system with dedicated admin & customer portal. 
            Easily create, distribute, and track both physical and digital gift cards to engage 
            customers and drive sales.
          </ProductDescription>
          <ProductFeatures>
            <FeatureItem>
              <FeatureTitle>Gift Card Creation</FeatureTitle>
              <FeatureDescription>Design and create custom gift cards for your business.</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Distribution Management</FeatureTitle>
              <FeatureDescription>Efficiently distribute both physical and digital gift cards.</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Tracking & Analytics</FeatureTitle>
              <FeatureDescription>Monitor gift card usage and analyze sales data.</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Customer Portal</FeatureTitle>
              <FeatureDescription>Provide a user-friendly interface for customers to manage their gift cards.</FeatureDescription>
            </FeatureItem>
          </ProductFeatures>
        </ProductContent>
      </ProductPageContainer>
    </>
  );
};

export default Wallet;