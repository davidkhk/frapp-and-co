import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/product.jsx';

const Products = ({ products, handleAddToCart }) => {
    return(
        <main>
            <Grid container justifyContent="center" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;