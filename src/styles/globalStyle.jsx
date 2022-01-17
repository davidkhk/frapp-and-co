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
    background-color: var(--clr-primary1);
  }
  h1 {
    font-family: 'FuturaBold';
    font-size: 3rem;
    margin-top: 80px;
}
  h2 {
    color: var(--clr-primary2);
}
`

export default GlobalStyle;