import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-inline: 10%;
`;

export const InstaImg = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 5px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  div {
    padding: 120px;
    color: var(--clr-primary2);
    font-size: 3rem;
    position: absolute;
    opacity: 0;
  }

  &:hover {
    img {
      transition: all 0.2s ease-in;
      opacity: 0.5;
    }
    div {
      transition: all 0.2s ease-in;
      opacity: 1;
    }
  }
`;

export const InstaLink = styled.a`
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-primary2);
  transition: all 0.2s ease-in;
  padding: 0.2rem;

  &:hover {
    color: var(--clr-secondary2);
    background: var(--clr-primary2);
    padding: 0.2rem;
  }
`;
