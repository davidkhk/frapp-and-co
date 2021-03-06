import React from 'react';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Picture1 from '../../assets/about-1.JPG';
import Picture2 from '../../assets/about-2.JPG';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-block: 4rem;
    }
`

const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    
    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`

const Img1 = styled.img`
    object-fit: contain;
    width: 75%;

    @media (max-width: 800px) {
        width: 40%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 425px) {
        width: 75%;
    }
`;

const Paragraph = styled.div`
    margin-inline: 10%;

    p {
        color: var(--clr-primary2);
        text-align: center;
    }
`;

const StyledText = styled.span`
    font-family: 'FuturaBold';
    color: var(--clr-secondary2);

    ${props =>
    props.strong &&
    css`
      color: var(--clr-primary1);
      background-color: var(--clr-primary2);
      padding: .2rem;
    `}
`

const Container2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`

const Img2 = styled.img`
    object-fit: contain;
    width: 70%;
    margin-inline: 10%;

    @media (max-width: 800px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
`

const About = () => {
    
    return (
    <Section id="about">
        <h1>Sobre nós</h1>
        <Container1>
            <Fade left>
                <Paragraph>
                    <p>Para nós, <StyledText>viver feliz</StyledText> é a coisa mais bonita que existe. Acreditamos que encontrar felicidade nas coisas pequenas e momentos inesperados do dia a dia é o segredo de uma vida feliz.</p>
                    <p>Porém, sabemos que muitas vezes isso não é a coisa mais fácil de se ter.</p>
                    <p>Não importa quem somos, o que fazemos, ou o quanto temos ou não temos, todos nós passamos por <StyledText>situações difíceis, ansiedades e medos</StyledText> no decorrer da vida, que muitas vezes aparecem e se manifestam em forma de impaciência, raiva, ou qualquer outro tipo de sentimento negativo. Ou seja, nos deixamos levar por esses traumas e nos esquecemos de sermos mais <StyledText>gentis, generosos e alegres.</StyledText></p>
                    <p>Foi aí que a ideia da <StyledText strong>Frapp & Co.</StyledText> surgiu.</p>
                    <p>Não somos apenas sobre beber e comer. Por fora somos uma mini cafeteria com design minimalista que serve <StyledText>Frapps</StyledText>, nossas bebidas geladas doces super saborosas, <StyledText>cafés especiais</StyledText> revigorantes, <StyledText>chás</StyledText> deliciosos, e <StyledText>comidinhas</StyledText> confortantes. Por dentro, nos propusemos (ambiciosamente) a te ajudar a viver essa vida feliz. Por meio do nosso atendimento e produtos, nós queremos criar esse momento alegre no meio do seu dia. Talvez o que você precise seja exatamente de mais alegria no seu dia. Talvez hoje é dia de tomar aquela decisão importante e uma dose de coragem cairia melhor. Ou de mais autoestima para ir a um encontro, ou mais confiança para ter aquela conversa com a chefe.</p>
                    <p>Seja o que for, que cada gole de Frapp ou café, mordida de bolo ou cookie, seja um gatilho para você parar, e antes de qualquer coisa se lembrar de apreciar a vida da melhor maneira possível, <StyledText>feliz</StyledText>.</p>
                    <p>Estamos aqui para você. <StyledText>Conta com a gente!</StyledText></p>
                </Paragraph>
            </Fade>
            <Fade right>
                <Img1 src={Picture1} alt="Serving cup" />
            </Fade>
        </Container1>
        <h2>Por trás da Frapp & Co.</h2>
        <Container2>
            <Fade left>
                <Img2 src={Picture2} alt="Team picture" />
            </Fade>
            <Fade right>
                <Paragraph>
                    <p>A <StyledText strong>Frapp & Co.</StyledText> é do bairro, uma empresa pequena e familiar. Abrimos em maio de 2020 no meio de uma pandemia e crise econômica mundial. Somos um casal que decidiu realizar um sonho de empreender e com a torcida de muitos amigos e familiares abrimos a loja.</p>
                    <p>Hoje temos na nossa equipe a Edna, nossa querida amiga e companheira que nos ajuda em tudo!</p>
                </Paragraph>
            </Fade>
        </Container2>
    </Section>
    )
}

export default About;