import React from 'react';
import styled from 'styled-components';
import IfoodImg from '../../images/ifood-icon.png';
import RappiImg from '../../images/rappi-icon.png';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    border: .5rem var(--clr-primary2) dotted;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    padding: 2rem;

    img {
        background-size: cover;
        padding-top: 2rem;
        width: 8rem;
    }
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`

const Delivery = () => {
    return (
        <Section id="delivery">
            <h1>Delivery</h1>
            <Container>
                <h2>Experimente agora e peça!</h2>
                <Icons>
                    <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/frapp--co-vila-mariana/609ccaed-7ae4-4579-b661-c23a7ad87105?utm_medium=share" target="_blank" rel="noopener noreferrer"><img src={IfoodImg} alt="Ifood logo" /></a>
                    <a href="https://www.rappi.com.br/restaurantes/900522096" target="_blank" rel="noopener noreferrer"><img src={RappiImg} alt="Rappi logo" /></a>
                </Icons>
            </Container>
        </Section>
    )
}

export default Delivery;