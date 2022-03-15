import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import FuturaBold from "../fonts/FuturaLT-Bold.woff";
import FuturaLT from "../fonts/FuturaLT.woff";
import FuturaOblique from "../fonts/FuturaLT-BookOblique.woff";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  * {
   scrollbar-width: thin;
}
  *::-webkit-scrollbar {
   width: 8px;
   height: 8px;
}
  *::-webkit-scrollbar-track {
    background-color: var(--clr-primary1);
}
  *::-webkit-scrollbar-thumb {
    background-color: var(--clr-secondary2);
}

@font-face {
  font-family: 'FuturaBold';
  src: url(${FuturaBold}) format('woff');
}
@font-face {
  font-family: 'FuturaLT';
  src: url(${FuturaLT}) format('woff');
}
@font-face {
  font-family: 'FuturaOblique';
  src: url(${FuturaOblique}) format('woff');
}

  html {
    scroll-behavior: smooth;
}
  body {
    margin: 0;
    font-family: 'FuturaLT';
    color: var(--clr-secondary2);
    background-image: linear-gradient(to right bottom, #f0dcbe, #efd7b2, #eed1a5, #eccc99, #ebc68d, #ebc68d, #ebc68d, #ebc68d, #eccc99, #eed1a5, #efd7b2, #f0dcbe);
    text-align: left;
  } 
  h1 {
    font-family: 'FuturaBold';
    font-size: 3rem;
    margin-top: 80px;

    @media (max-width: 425px) {
      font-size: 2rem;
    }
}
  h2 {
    color: var(--clr-primary2);

    @media (max-width: 425px) {
      font-size: 1rem;
    }
}
`

export default GlobalStyle;