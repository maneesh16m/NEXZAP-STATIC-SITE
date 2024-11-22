import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 0 24px;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>© 2023 NexZap. All rights reserved</Logo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;