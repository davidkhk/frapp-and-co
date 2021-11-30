import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 2.5%;

  input, textarea {
    color: var(--clr-secondary2);
    background-color: var(--clr-primary2);
    border: 1px solid var(--clr-primary1);
    border-radius: var(--border-radius);
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
    border-radius: var(--border-radius);
    margin-bottom: 10%;
    text-align: center;
    font-family: 'Futura', 'Mr Eaves Sans', 'Futura PT Book';
    transition: 0.3s;
  }
  button:hover {
    color: var(--clr-secondary2);
    background: var(--clr-secondary1);
    border: 1px var(--clr-secondary1) solid;
}

@media (max-width: 600px) {
  width: 100%;
}
`

const ContactForm = () => {
    const[sent, setSent] = useState(false);
    const [text, setText] = useState("");

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send_mail", {
                text
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            {!sent ? (
                <StyledForm onSubmit={handleSend}>
                    <>
                        <label htmlFor='name'></label>
                        <input type='text' id='name' placeholder="What's yout name?" required />
                    </>
                    <>
                        <label htmlFor='email'></label>
                        <input type='email' id='email' placeholder="What's your email?" required />
                    </>
                    <>
                        <label htmlFor='message'></label>
                        <textarea textarea value={text} onChange={(e) => setText(e.target.value)} id='message' placeholder='Type your message!' rows='8' required />
                    </>
                    <button type='submit'>Send</button>
                </StyledForm>
            ): (
                <h1>Email sent</h1>
            )}
    </div>
)};

export default ContactForm;