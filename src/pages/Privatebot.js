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

const Privatebot = () => {
  return (
    <ProductPageContainer>
      <ProductContent>
        <ProductTitle>PRIVATEBOT</ProductTitle>
        <ProductDescription>
          A cutting-edge, LLM-based model designed to help companies organize and retrieve information efficiently. 
          With PRIVATEBOT, businesses can leverage AI for intelligent document search and processing.
        </ProductDescription>
        <ProductFeatures>
          <FeatureItem>
            <FeatureTitle>AI-Powered Search</FeatureTitle>
            <FeatureDescription>Quickly find relevant information across your organization's documents.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Intelligent Processing</FeatureTitle>
            <FeatureDescription>Automatically categorize and extract key information from documents.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Secure Information Handling</FeatureTitle>
            <FeatureDescription>Ensure your sensitive data remains protected while leveraging AI capabilities.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Customizable Integration</FeatureTitle>
            <FeatureDescription>Easily integrate PRIVATEBOT with your existing systems and workflows.</FeatureDescription>
          </FeatureItem>
        </ProductFeatures>
      </ProductContent>
    </ProductPageContainer>
  );
};

export default Privatebot;