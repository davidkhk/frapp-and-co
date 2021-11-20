import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Contact = () => {
    return (
        <Container id="contact">
            <h1>Contact</h1>
        </Container>
    )
};

export default Contact;