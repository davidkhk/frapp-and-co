import React from 'react';
import './styles.css'

const ContactForm = () => {  
  return (
    <form className='form' name='contact' method='post'>
      <input type="hidden" name="form-name" value="contact" />
      <>
        <label htmlFor='name'></label>
        <input className='input' type='text' id='name' name='name' placeholder="Qual é o seu nome?" required />
      </>
      <>
        <label htmlFor='email'></label>
        <input className='input' type='email' id='email' name='email' placeholder="E o seu email?" required />
      </>
      <>
        <label htmlFor='message'></label>
        <textarea className='input' id='message' name="message" placeholder='Digite sua mensagem!' rows='8' required />
      </>
      <>
        <button className='btn' type='submit'>Enviar</button>
      </>
    </form>
  );
};

export default ContactForm;