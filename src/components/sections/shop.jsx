import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Products from '../products.jsx';
import { commerce } from '../lib/commerce';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Shop = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products)

    return (
        <Section id="shop">
            <h1>Loja</h1>
            <Products products={products}/>
        </Section>
    )
}

export default Shop;