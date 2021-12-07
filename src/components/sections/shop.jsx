import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Products from '../products.jsx';
import ShoppingCartIcon from '../shoppingCartIcon.jsx'
import { commerce } from '../lib/commerce';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Shop = ({ totalItems }) => {    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Section id="shop">
            <h1>Loja</h1>
            <ShoppingCartIcon totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
        </Section>
    )
}

export default Shop;