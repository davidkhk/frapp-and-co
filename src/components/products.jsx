import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/product.jsx';

const Products = ({ products, handleAddToCart }) => {
    return(
        <main>
            <Grid container justifyContent="space-evenly">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;