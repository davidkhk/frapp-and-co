import React from 'react';
import styled from 'styled-components';
import IfoodImg from '../../assets/ifood-icon.png';
import RappiImg from '../../assets/rappi-icon.png';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Grid = styled.div`
	display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: .5rem var(--clr-primary2) dotted;
    position: relative;
	margin: 0 auto;
	max-width: 1000px;
	list-style: none;
	text-align: center;
`
const EffectLilly = styled.figure`
    img {
	max-width: none;
	width: -webkit-calc(100% + 50px);
	width: calc(40% + 50px);
	opacity: 0.7;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
    padding-top: 3rem;
    }

    a {
    cursor: pointer;
    text-decoration: none;
    }

    figcaption {
	text-align: left;

    figcaption > div {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	height: 50%;
}
}
    p {
    -webkit-transform: translate3d(0,40px,0);
	transform: translate3d(0,40px,0);
}
    p {
	color: var(--clr-primary2);
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
}
    &:hover img,
    &:hover p {
	opacity: 1;
}
    &:hover img,
    &:hover p {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
    :hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}
`


const Delivery = () => {
    return (
        <Section id="delivery">
            <h1>Peça e experimente agora!</h1>
            <Grid>
                <EffectLilly>
                <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/frapp--co-vila-mariana/609ccaed-7ae4-4579-b661-c23a7ad87105?utm_medium=share" target="_blank" rel="noreferrer">
                    <img src={IfoodImg} alt="Ifood icon"/>
                    <figcaption>
                        <div>
                            <p>Pra quem usa iFood</p>
                        </div>
                    </figcaption>
                </a>			
                </EffectLilly>
                <EffectLilly className="effect-lily">
                <a href="https://www.rappi.com.br/restaurantes/900522096" target="_blank" rel="noreferrer">
                    <img src={RappiImg} alt="img1"/>
                    <figcaption>
                        <div>
                            <p>ou pra quem prefere Rappi</p>
                        </div>
                    </figcaption>
                </a>			
                </EffectLilly>
            </Grid>
        </Section>
    )
}

export default Delivery;