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
   background: var(--clr-primary1);
}
  *::-webkit-scrollbar-thumb {
   background-color: var(--clr-secondary2);
   border-radius: var(--border-radius);
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
    font-family: 'FuturaLT';
    color: var(--clr-secondary2);
    background-color: var(--clr-primary1);
    margin: 0;
}
  h1 {
    font-family: 'FuturaBold';
    font-size: 3rem;
    color: var(--clr-secondary1);
    margin-top: 100px;
}
`

export default GlobalStyle;