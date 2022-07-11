import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const WorkingHours = styled.div`
  color: var(--clr-primary2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  border: 0.5rem var(--clr-primary2) dotted;

  @media (max-width: 800px) {
    margin-left: 10%;
    border: none;
  }
`;

export const Animation = styled.figure`
  img {
    margin-left: 15%;
    width: -webkit-calc(100% + 50px);
    width: calc(40% + 50px);
    opacity: 0.7;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-40px, 0, 0);
    transform: translate3d(-40px, 0, 0);
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  figcaption {
    text-align: left;

    figcaption > div {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 2em;
      width: 100%;
      height: 50%;
    }
  }
  p {
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }
  p {
    color: var(--clr-primary2);
    opacity: 0;
    -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
    transition: opacity 0.2s, transform 0.35s;
  }
  &:hover img,
  &:hover p {
    opacity: 1;
  }
  &:hover img,
  &:hover p {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  :hover p {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
    -webkit-transition-duration: 0.35s;
    transition-duration: 0.35s;
  }
`;
