import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import Cake from '../../assets/cake.jpeg';
import CoffeeBoomergang from '../../assets/coffee-boomerang.gif';
import CoffeeBag from '../../assets/coffeebag.jpeg';
import Mocha from '../../assets/mocha.jpg';
import SaltedCaramel from '../../assets/salted-caramel.jpg';
import StrawberryBanana from '../../assets/strawberry-banana.jpeg';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 80%;
        flex-wrap: wrap;
    }
    .image {
        position: relative;
        width: 20rem;
        height: 20rem;
        margin: .3rem;
    }
    .image__img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.2s ease-in;
    }
    .overlay:hover {
        opacity: 1;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--clr-primary1);
        font-size: 4rem;
        width: 100%;
        height: 100%;
    }
`

const Instagram = () => {
    return (
        <StyledSection id='instagram'>
            <h1>Instagram</h1>
            <div>
                <div className='image'>
                    <img className='image__img' src={Cake} alt='Instagram img1'/>
                    <div className='overlay'>
                        <a className='icon' href="https://www.instagram.com/p/CUfv9ETlBDe/" target='_blank' rel='noreferrer'><FaInstagram /></a>                        
                    </div>
                </div>
                <div className='image'>
                    <img className='image__img' src={CoffeeBoomergang} alt='Instagram img2'/>
                    <div className='overlay'>
                        <a className='icon' href="https://www.instagram.com/p/CWOMimghDl6/" target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div>
                </div>
                <div className='image'>
                    <img className='image__img' src={CoffeeBag} alt='Instagram img3'/>
                    <div className="overlay">
                        <a className='icon' href="https://www.instagram.com/p/CVJmn5il6iX/" target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div> 
                </div>
                <div className="image">
                    <img className='image__img' src={Mocha} alt='Instagram img4'/>
                    <div className="overlay">
                        <a className='icon' href="https://www.instagram.com/p/CQhYrWfj5d-/" target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div>
                </div>
                <div className="image">
                    <img className='image__img' src={SaltedCaramel} alt='Instagram img5'/>
                    <div className="overlay">
                        <a className='icon' href="https://www.instagram.com/p/CTzU4t8lzxz/" target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div>    
                </div>
                <div className="image">
                    <img className='image__img' src={StrawberryBanana} alt='Instagram img6'/>
                    <div className="overlay">
                        <a className='icon' href="https://www.instagram.com/p/CUX7v1XlA9s/" target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default Instagram;