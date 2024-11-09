import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ProductListItem from '../ProductListItem';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[] | undefined;
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {isLoading ? (
        Array(10)
          .fill(null)
          .map((_, index) => (
            <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
              <Skeleton variant="rounded" height={240} />
            </Grid>
          ))
      ) : products && products.length ? (
        products.map((product) => (
          <Grid key={product.id} size={{ xs: 4, sm: 4, md: 4 }}>
            <ProductListItem product={product}></ProductListItem>
          </Grid>
        ))
      ) : (
        <Grid size={{ xs: 4, sm: 8, md: 12 }}>
          <Typography variant="subtitle1" textAlign={'center'}>
            {t('noProducts')}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductList;
