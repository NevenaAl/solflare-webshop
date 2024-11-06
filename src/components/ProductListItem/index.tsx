import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useTranslation } from 'react-i18next';
import { Box, Tooltip } from '@mui/material';

import style from './ProductListItem.module.scss';
import { spacings } from '../../styles/variables/variables';

interface ProductListItemProps {
  product: any;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: spacings.spacingLarge }}>
          {product.price}
        </Typography>
        <Box className={style.card__description}>
          <Typography variant="body3" sx={{ mb: spacings.spacingLarge }}>
            {product.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={style.card__actions}>
        <Button>{t('seeDetails')}</Button>
        <Tooltip title={t('addToShoppingCart')}>
          <IconButton color="primary" aria-label={t('addToShoppingCart')}>
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
