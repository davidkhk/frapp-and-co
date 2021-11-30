import React from 'react';
import styled from 'styled-components';
import ContactForm from "../contactForm"

const Section = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Contact = () => {    
    return (
        <Section id="contact">
            <h1>Contato</h1>
            <ContactForm />
        </Section>
    )
};

export default Contact;