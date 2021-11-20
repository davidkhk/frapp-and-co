import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImg from '../images/logo.png';
import { useSpring, animated } from 'react-spring';
import { FaBars, FaAngleDoubleDown } from 'react-icons/fa';

const AnimatedNav = styled(animated.nav)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--clr-primary1);
`;

const Logo = styled.div`
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 50px;
  margin: 2% 10%;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  padding-inline: 1rem;

  @media (max-width: 600px) {
      display: flex;
  }
`;

const Menu = styled.div`
  margin-right: 10%;
  display: flex;
  align-items: flex-end;
  position: relative;

  @media (max-width: 600px) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      padding-bottom: ${({isOpen}) => (isOpen ? '.5rem' : '0')};
      max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
      transition: max-height .3s ease-in;
  }
`;

const MenuLinks = styled.a`
  font-size: 1.2rem;
  margin-left: 3rem;
  padding: .3rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-primary2);
  transition: all .2s ease-in;
 
  &:hover {
    color: var(--clr-secondary2);
    background: var(--clr-primary2);
    border-radius: var(--border-radius);
    }
`;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleClick() {
        setIsOpen(!isOpen)
    };

    const props = useSpring({
      from: {opacity: 0},
      to: {opacity: 1},
      delay: 2000,
      config: {duration: 500}
    });

    return(
      <AnimatedNav style={props} >
        <Logo></Logo>
        <Hamburger onClick={handleClick}>
        {isOpen ? <FaAngleDoubleDown/> : <FaBars/>}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLinks href='#home'>início</MenuLinks>
          <MenuLinks href='#about'>sobre</MenuLinks>
          <MenuLinks href='#shop'>loja</MenuLinks>
          <MenuLinks href='#delivery'>peça!</MenuLinks>
          <MenuLinks href='#instagram'>instagram</MenuLinks>
          <MenuLinks href='#contact'>contato</MenuLinks>
        </Menu>
      </AnimatedNav>
    );
}

export default Navbar;