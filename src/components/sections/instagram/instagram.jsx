import React from 'react';
import { Section, Container, InstaImg, InstaLink } from './instagram-style';
import Mocha from '../../../assets/mocha.jpg';
import CoffeeBoomerang from '../../../assets/coffee-boomerang.gif';
import Cake from '../../../assets/cake.jpeg';
import CoffeeBag from '../../../assets/coffeebag.jpeg';
import SaltedCaramel from '../../../assets/salted-caramel.jpg';
import StrawberryBanana from '../../../assets/strawberry-banana.jpeg';
import { FaInstagram } from 'react-icons/fa';

function Instagram() {
  return (
    <Section id='instagram'>
      <h1>Segue a gente no Instagram!</h1>
      <Container>
        <InstaImg
          href='https://www.instagram.com/p/CTzU4t8lzxz/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={SaltedCaramel} alt='Frapp salted caramel' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
        <InstaImg
          href='https://www.instagram.com/p/CUfv9ETlBDe/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Cake} alt='Carrot cake' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
        <InstaImg
          href='https://www.instagram.com/p/CWOMimghDl6/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={CoffeeBoomerang} alt='Coffee bag boomerang' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
        <InstaImg
          href='https://www.instagram.com/p/CUX7v1XlA9s/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={StrawberryBanana} alt='Strawberry banana frapp' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
        <InstaImg
          href='https://www.instagram.com/p/CQhYrWfj5d-/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Mocha} alt='Mocha' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
        <InstaImg
          href='https://www.instagram.com/p/CVJmn5il6iX/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={CoffeeBag} alt='Coffee bag' />
          <div>
            <FaInstagram />
          </div>
        </InstaImg>
      </Container>
      <InstaLink
        href='https://www.instagram.com/frapp.and.co/'
        target='_blank'
        rel='noreferrer'
      >
        @frapp.and.co
      </InstaLink>
    </Section>
  );
}

export default Instagram;
