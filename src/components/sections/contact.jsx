import React from 'react';
import styled from 'styled-components';
import ContactForm from '../contactForm/contactForm';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: var(--clr-primary2);
    }
`

function Contact() {    
    return (
        <Section id="contact">
            <h1>Contato</h1>
            <h2>Tem alguma pergunta ou quer dar um alô?</h2>
            <ContactForm />
    </Section>
    )
};

export default Contact;