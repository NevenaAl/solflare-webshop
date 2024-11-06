import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'react-i18next';

import style from './ProductListItem.module.scss';
import { spacings } from '../../styles/variables/variables';

interface ProductListItemProps {
  product: any;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card className={style.product__card}>
      <CardContent>
        <Link href={`/product/${product.id}`}>
          <Typography variant="body1" gutterBottom>
            {product.name}
          </Typography>
        </Link>
        <Typography className={style.product__card__paragraph} variant="body2">
          {product.price}
        </Typography>
        <Box className={style.product__card__description}>
          <Typography
            className={style.product__card__paragraph}
            variant="body3"
          >
            {product.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={style.product__card__actions}>
        <Button href={`/product/${product.id}`}>{t('seeDetails')}</Button>
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
