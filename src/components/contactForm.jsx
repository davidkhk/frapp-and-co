import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 2.5%;

  input, textarea {
    color: var(--clr-secondary2);
    background-color: var(--clr-primary1);
    border: 1px solid var(--clr-primary2);
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    padding-block: 1%;
    width: 60%;
    margin: 0.5% 0;
    :focus {
    outline-width: 0;
  }
  
  ::placeholder {
      color: var(--clr-secondary1);
    }
}
  button{
    color: var(--clr-secondary2);
    background-color: var(--clr-primary1);
    border: 1px solid var(--clr-secondary2);
    width: 15%;
    height: 30px;
    margin-bottom: 10%;
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    transition: all 0.3s ease-in;
  }
  button:hover {
    color: var(--clr-primary2);
    background: var(--clr-secondary1);
    border: 1px var(--clr-primary2) solid;
}

@media (max-width: 600px) {
  width: 100%;
}
`

const ContactForm = () => {  
    
  return (
    <StyledForm onSubmit={}>
        <input onChange={} type="text" id='name' placeholder="Qual é o seu nome?" value={mailerState.name} required />
        <input onChange={} type="email" id='email' placeholder="E o seu email?" value={mailerState.email} required />
        <textarea onChange={} id="message" placeholder='Digite sua mensagem!' rows='8' value={mailerState.message} required />
        <button type='submit'>Enviar</button>
    </StyledForm>
  );
};

export default ContactForm;