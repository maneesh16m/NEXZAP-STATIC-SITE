import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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

  const handleClick = (e, section) => {
    setIsOpen(false);
    
    if (section === 'home') {
      handleHomeClick();
      return;
    }

    e.preventDefault();
    const element = document.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
      setTimeout(scrollToTop, 100);
    }
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
          <NavLink as={Link} to="/" onClick={(e) => handleClick(e, 'home')}>Home</NavLink>
          <NavLink href="#products" onClick={(e) => handleClick(e, 'products')}>Products</NavLink>
          <NavLink href="#services" onClick={(e) => handleClick(e, 'services')}>Services</NavLink>
          <NavLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/" onClick={(e) => handleClick(e, 'home')}>Home</MobileLink>
            <MobileLink href="#products" onClick={(e) => handleClick(e, 'products')}>Products</MobileLink>
            <MobileLink href="#services" onClick={(e) => handleClick(e, 'services')}>Services</MobileLink>
            <MobileLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
