import React from 'react';
import styled from 'styled-components'
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
    border: 1px var(--clr-secondary2) solid;
    border-radius: 45px;
    margin-right: 5%;
`

const ShoppingCartIcon = ({ totalItems }) => {
    const location = useLocation();

    return (
        <Container>
            {location.pathname === '/' && (
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={ totalItems } color="secondary">
                    <ShoppingCart fontSize="large" />
                </Badge>
            </IconButton>
            )}
        </Container>
    )
}

export default ShoppingCartIcon;