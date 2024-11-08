import React, { useContext } from 'react';
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
import { Product } from '../../types/product';
import { CartContext } from '../../context/CartProvider';
import Price from '../ui/Price';
import useToast from '../../hooks/useToast';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const { addToast } = useToast();

  const handleAddToCartClick = () => {
    addToCart(product);
    addToast({ message: t('productAddedToCart', { product: product.name }) });
  };

  return (
    <Card className={style.product__card}>
      <CardContent className={style.product__card__content}>
        <Link href={`/product/${product.id}`}>
          <Typography variant="body1" gutterBottom>
            {product.name}
          </Typography>
        </Link>
        <Price value={product.price}></Price>
        <Box className={style.product__card__description}>
          <Typography variant="body3">{product.description}</Typography>
        </Box>
      </CardContent>
      <CardActions className={style.product__card__actions}>
        <Button href={`/product/${product.id}`}>{t('seeDetails')}</Button>
        <Tooltip title={t('addToShoppingCart')}>
          <IconButton
            onClick={handleAddToCartClick}
            color="primary"
            aria-label={t('addToShoppingCart')}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
