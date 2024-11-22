import React from 'react';
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

const Tagflo = () => {
  return (
    <ProductPageContainer>
      <ProductContent>
        <ProductTitle>TAGFLO</ProductTitle>
        <ProductDescription>
          TAGFLO is a comprehensive tracking tool for businesses that need to manage and monitor their valuable assets. 
          TAGFLO ensures accountability through item verification, PIN-based access, and photo capture.
        </ProductDescription>
        <ProductFeatures>
          <FeatureItem>
            <FeatureTitle>Asset Tracking</FeatureTitle>
            <FeatureDescription>Keep track of all your valuable assets in real-time.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>PIN-Based Access</FeatureTitle>
            <FeatureDescription>Secure access to assets with personalized PIN codes.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Photo Verification</FeatureTitle>
            <FeatureDescription>Capture and store photos for visual verification of assets.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Reporting & Analytics</FeatureTitle>
            <FeatureDescription>Generate detailed reports on asset usage and status.</FeatureDescription>
          </FeatureItem>
        </ProductFeatures>
      </ProductContent>
    </ProductPageContainer>
  );
};

export default Tagflo;