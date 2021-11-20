import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const About = () => {
    return (
        <Container id="about">
            <h1>About</h1>
        </Container>
    )
}

export default About;