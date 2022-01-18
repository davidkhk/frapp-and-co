import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Products from '../products.jsx';
import ShoppingCartIcon from '../cart/shoppingCartIcon.jsx';
import Cart from '../cart/cart.jsx';
import Checkout from '../checkoutForm/checkout/checkout.jsx';
import { commerce } from '../lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TitleContainer = styled.div`
    h1 {
        margin: 80px auto 0 auto;
        vertical-align: middle;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
`

const Shop = () => {    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        
        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <Section id="shop">
                <TitleContainer>
                    <h1>Loja</h1>
                    <ShoppingCartIcon totalItems={cart.total_items} />
                </TitleContainer>
                <Routes>
                    <Route exact path="/" element={<Products products={products} handleAddToCart={handleAddToCart} />} />
                    <Route exact path="/cart" element={
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                        } />
                    <Route exact path="/checkout" element={
                        <Checkout
                            cart={cart}
                            order={order}
                            handleCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}    
                        />}
                    />
                </Routes>
            </Section>
        </Router>
    );
}

export default Shop;