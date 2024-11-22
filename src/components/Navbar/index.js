import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTop, 100);
    } else {
      scrollToTop();
    }
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      handleHomeClick();
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 67;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 67;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={handleHomeClick}>
          <img src="/images/nexlogo.png" alt="NexZap Logo" style={{ width: '50px', height: 'auto' }} />
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('products')}>Products</NavLink>
          <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink onClick={() => scrollToSection('home')}>Home</MobileLink>
            <MobileLink onClick={() => scrollToSection('products')}>Products</MobileLink>
            <MobileLink onClick={() => scrollToSection('services')}>Services</MobileLink>
            <MobileLink onClick={() => scrollToSection('contact')}>Contact</MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
