import React from 'react';
import { StyledFooter, StyledP } from './footer-style';
import { FaRegCopyright } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledP>
        <a
          href='https://github.com/davidkhk/frapp-and-co'
          target='_blank'
          rel='noreferrer'
        >
          Designed & built by David Kang
        </a>
      </StyledP>
      <StyledP year>
        <FaRegCopyright fontSize='small' /> {year}
      </StyledP>
    </StyledFooter>
  );
}

export default Footer;
