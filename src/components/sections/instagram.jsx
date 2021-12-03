import React from 'react';
import styled from 'styled-components';
import Mocha from '../images/mocha.jpg';
import CoffeeBoomerang from '../images/coffee-boomerang.MOV';
import Cake from '../images/cake.jpeg';
import CoffeeBag from '../images/coffee-bag.jpeg';
import SaltedCaramel from '../images/salted-caramel.jpeg';
import StrawberryBanana from '../images/strawberry-banana.jpeg';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flexbox;
    flex-direction: row;
    width: 80%;
`
const InstaImg = styled.a`
    img {
        max-width: none;
    	width: -webkit-calc(100% + 50px);
    	width: calc(40% + 50px);
    }
`
const InstaLink = styled.a`
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
                <InstaImg href="https://www.instagram.com/p/CTzU4t8lzxz/" target="_blank" rel='noreferrer'><img href={SaltedCaramel} alt="Frapp salted caramel" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CUfv9ETlBDe/" target="_blank" rel='noreferrer'><img href={Cake} alt="Carrot cake" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CWOMimghDl6/" target="_blank" rel='noreferrer'><img href={CoffeeBoomerang} alt="Coffee bag boomerang" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CUX7v1XlA9s/" target="_blank" rel='noreferrer'><img href={StrawberryBanana} alt="Strawberry banana frapp" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CQhYrWfj5d-/" target="_blank" rel='noreferrer'><img href={Mocha} alt="Mocha" /></InstaImg>
                <InstaImg href="https://www.instagram.com/p/CVJmn5il6iX/" target="_blank" rel='noreferrer'><img href={CoffeeBag} alt="Coffee bag" /></InstaImg>
            </Container>
            <InstaLink href="https://www.instagram.com/frapp.and.co/" target="_blank" rel="noreferrer">@frapp.and.co</InstaLink>
        </Section>
    )
}

export default Instagram;