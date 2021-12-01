import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
    border: 1px green solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px red solid;
    width: 80%;
    height: 500px;
`
const Ifood = styled.div`
    width: 50%;
`
const Rappi = styled.div`
    width: 50%;
`
const Delivery = () => {
    return (
        <Section id="delivery">
            <h1>Delivery</h1>
            <Container>
                <Ifood>
                    <h2>iFood</h2>
                </Ifood>
                <Rappi>
                    <h2>Rappi</h2>
                </Rappi>
            </Container>
        </Section>
    )
}

export default Delivery;