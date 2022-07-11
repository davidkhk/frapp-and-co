import React, { useState } from 'react';
import { StyledNav, Logo, Hamburger, Menu, MenuLinks } from './navbar-style';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaBars, FaAngleDoubleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <StyledNav>
        <Logo></Logo>
        <Hamburger onClick={handleClick}>
          {isOpen ? (
            <FaAngleDoubleDown fontSize='large' />
          ) : (
            <FaBars fontSize='large' />
          )}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLinks href='#home'>início</MenuLinks>
          <MenuLinks href='#about'>sobre</MenuLinks>
          <MenuLinks href='#shop'>loja</MenuLinks>
          <MenuLinks href='#delivery'>peça!</MenuLinks>
          <MenuLinks href='#instagram'>instagram</MenuLinks>
          <MenuLinks href='#contact'>contato</MenuLinks>
        </Menu>
      </StyledNav>
    </Router>
  );
};

export default Navbar;
