import React from 'react';
import styled from 'styled-components'
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin-right: 1rem;
    border: 1px var(--clr-secondary2) solid;
    border-radius: 45px;
`

const ShoppingCartIcon = ({ totalItems }) => {

    return (
        <Container>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={ totalItems } color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Container>
    )
}

export default ShoppingCartIcon;