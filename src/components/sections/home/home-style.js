import styled from 'styled-components';
import HomeImg from '../../../assets/home-2.jpg';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-image: url(${HomeImg});
  background-size: cover;
  width: 90%;
  height: 80%;

  h1 {
    font-size: 3.5rem;
  }

  @media (max-width: 800px) {
    background-position: right;
  }
`;
