import React from 'react';
import styled from 'styled-components';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 80%;
`


function Instagram() {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    return (
        <Section id="instagram">
            <h1>Segue a gente no Instagram!</h1>
            <Container>
                <InstagramFeed token={token} counter="12"/>
            </Container>
        </Section>
    )
}

export default Instagram;