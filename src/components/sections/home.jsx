import React from 'react';
import styled from 'styled-components';
import HomeImg from '../../assets/home-2.jpg'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
    margin-top: 5%;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: .8;
    }
    h1 {
        position: absolute;
    }
`

const Home = () => {
    return (
        <Section id="home">
            <Container>
                <img src={HomeImg} alt="Frapp & Co." />
                <h1>Uma dose de alegria no seu dia.</h1>
            </Container>
        </Section>
    )
}

export default Home;