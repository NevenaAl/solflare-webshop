import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import ProductListItem from '../ProductListItem';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products?.map((product, index) => (
        <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
          <ProductListItem product={product}></ProductListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
