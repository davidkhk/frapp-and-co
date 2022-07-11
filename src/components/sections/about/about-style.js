import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-block: 4rem;
  }
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Img1 = styled.img`
  object-fit: contain;
  width: 75%;

  @media (max-width: 800px) {
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 425px) {
    width: 75%;
  }
`;

export const Paragraph = styled.div`
  margin-inline: 10%;

  p {
    color: var(--clr-primary2);
    text-align: center;
  }
`;

export const StyledText = styled.span`
  font-family: 'FuturaBold';
  color: var(--clr-secondary2);

  ${(props) =>
    props.strong &&
    css`
      color: var(--clr-primary1);
      background-color: var(--clr-primary2);
      padding: 0.2rem;
    `}
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Img2 = styled.img`
  object-fit: contain;
  width: 70%;
  margin-inline: 10%;

  @media (max-width: 800px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
