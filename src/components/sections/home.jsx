import React from 'react';
import styled from 'styled-components';
import HomeImg from '../../images/home.jpg'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Container = styled.div`
    background-image: url(${HomeImg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    margin-top: 2%;
`

const Home = () => {
    return (
        <Section id="home">
            <Container>
                <h1>Uma dose de alegria no seu dia.</h1>
            </Container>
        </Section>
    )
}

export default Home;