import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Contact = () => {
    return (
        <Section id="contact">
            <h1>Contact</h1>
        </Section>
    )
};

export default Contact;