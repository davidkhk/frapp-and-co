import React from 'react';
import styled from 'styled-components'
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Container = styled.div`
    position: absolute;
    right: 10%;
    background-color: var(--clr-primary2);
    border: 1px var(--clr-secondary2) solid;
    border-radius: 45px;
    padding: 1rem;
`

const ShoppingCartIcon = ({ totalItems }) => {
    return (
    <Container>
        <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={ totalItems } color="secondary">
                <ShoppingCart fontSize="large" />
            </Badge>
        </IconButton>
    </Container>
    )
}

export default ShoppingCartIcon;