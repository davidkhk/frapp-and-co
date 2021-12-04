import React from 'react';
import styled from 'styled-components';
import Mocha from '../../images/mocha.jpg';
import CoffeeBoomerang from '../../images/coffee-boomerang.gif';
import Cake from '../../images/cake.jpeg';
import CoffeeBag from '../../images/coffeebag.jpeg';
import SaltedCaramel from '../../images/salted-caramel.jpeg';
import StrawberryBanana from '../../images/strawberry-banana.jpeg';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-inline: 10%;
`
const InstaImg = styled.a`
    
    img {
        object-fit: cover;
        width: 300px;
        height: 300px;
        border: 5px var(--clr-primary1) solid;
        opacity: 1;
        transition: ease-out .2s;
    }
    video {
        width: 300px;
        height: 300px;
        border: 5px var(--clr-primary1) solid;
    }
`
const InstaLink = styled.a`
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-primary2);
  transition: all .2s ease-in;
  padding: .2rem;
  
  &:hover {
    color: var(--clr-secondary2);
    background: var(--clr-primary2);
    padding: .2rem;
    }
`;


function Instagram() {

    return (
        <Section id="instagram">
            <h1>Segue a gente no Instagram!</h1>
            <Container>
                <InstaImg href="https://www.instagram.com/p/CTzU4t8lzxz/" target="_blank" rel='noreferrer'><img src={SaltedCaramel} alt="Frapp salted caramel" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CUfv9ETlBDe/" target="_blank" rel='noreferrer'><img src={Cake} alt="Carrot cake" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CWOMimghDl6/" target="_blank" rel='noreferrer'><img src={CoffeeBoomerang} alt="Coffee bag boomerang" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CUX7v1XlA9s/" target="_blank" rel='noreferrer'><img src={StrawberryBanana} alt="Strawberry banana frapp" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CQhYrWfj5d-/" target="_blank" rel='noreferrer'><img src={Mocha} alt="Mocha" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CVJmn5il6iX/" target="_blank" rel='noreferrer'><img src={CoffeeBag} alt="Coffee bag" /></InstaImg>
            </Container>
            <InstaLink href="https://www.instagram.com/frapp.and.co/" target="_blank" rel="noreferrer">@frapp.and.co</InstaLink>
        </Section>
    )
}

export default Instagram;