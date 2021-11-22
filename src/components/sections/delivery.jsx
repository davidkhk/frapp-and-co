import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Delivery = () => {
    return (
        <Section id="delivery">
            <h1>Delivery</h1>
        </Section>
    )
}

export default Delivery;