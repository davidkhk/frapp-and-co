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
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Muito obrigado pela mensagem!");
      } else if (resData.status === "fail") {
        alert("Oops! Alguma coisa deu errado. Por favor, tente novamente!");
      }
    })
    .then(() => {
      setMailerState({
        email: "",
        name: "",
        message: "",
      });
    });
};

  return (
    <StyledForm onSubmit={submitEmail}>
        <input onChange={handleStateChange} name='name' placeholder="Qual é o seu nome?" value={mailerState.name} required />
        <input onChange={handleStateChange} name='email' placeholder="E o seu email?" value={mailerState.email} required />
        <textarea onChange={handleStateChange} name="message" placeholder='Digite sua mensagem!' rows='8' value={mailerState.message} required />
        <button>Enviar</button>
    </StyledForm>
  );
};

export default ContactForm;