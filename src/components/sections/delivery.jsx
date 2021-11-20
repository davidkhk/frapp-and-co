import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Delivery = () => {
    return (
        <Container id="delivery">
            <h1>Delivery</h1>
        </Container>
    )
}

export default Delivery;