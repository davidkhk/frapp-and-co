import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import HomeImg from '../../assets/home-2.jpg'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    background-image: url(${HomeImg});
    background-size: cover;
    width: 90%;
    height: 80%;

    h1 {
        font-size: 3.5rem;
    }
`;

const Home = () => {
    return (
        <Section id="home">
            <ImgContainer>
            <Zoom>
                <h1>Uma dose de alegria no seu dia.</h1>
            </Zoom>
            </ImgContainer>  
        </Section>
    )
}

export default Home;