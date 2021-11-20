import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 500px;
`

const Shop = () => {
    return (
        <Container id="shop">
            <h1>Shop</h1>
        </Container>
    )
}

export default Shop;