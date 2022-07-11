import React from 'react';
import { Section } from './contact-style';
import ContactForm from '../../contactForm/contactForm';

function Contact() {
  return (
    <Section id='contact'>
      <h1>Contato</h1>
      <h2>Tem alguma pergunta ou quer dar um alô?</h2>
      <ContactForm />
    </Section>
  );
}

export default Contact;
