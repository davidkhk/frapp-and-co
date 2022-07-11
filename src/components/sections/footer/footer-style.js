import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  text-align: center;
  justify-content: center;
  background-color: var(--clr-primary2);
  border-top: 1px var(--clr-secondary2) solid;

  a {
    color: var(--clr-primary1);
    text-decoration: none;
    padding: 0.2rem;
    transition: all 0.3s ease-in;
  }
  a:hover {
    color: var(--clr-primary1);
    background: var(--clr-secondary1);
    padding: 0.2rem;
  }
`;

export const StyledP = styled.p`
  color: var(--clr-primary1);
  font-size: 1rem;
  padding-block: 0.2%;
  margin: 0%;

  ${(props) =>
    props.year &&
    css`
      font-size: 0.7em;
    `};
`;
