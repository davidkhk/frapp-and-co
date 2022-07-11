import styled from 'styled-components';
import LogoImg from '../../assets/logo-bege.png';

export const StyledNav = styled.nav`
  z-index: 500;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--clr-primary2);
  border-bottom: 1px var(--clr-secondary2) solid;
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin: 1rem 5%;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  padding-inline: 1rem;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  padding-right: 5%;
  display: flex;
  align-items: flex-end;
  position: relative;

  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    padding-bottom: ${({ isOpen }) => (isOpen ? '.5rem' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLinks = styled.a`
  font-size: 1.2rem;
  margin-left: 3rem;
  padding: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-primary1);
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--clr-secondary2);
    background: var(--clr-primary1);
    padding: 0.3rem;
  }
`;
