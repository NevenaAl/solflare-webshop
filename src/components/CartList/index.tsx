import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CartListItem from '../CartListItem';
import { CartItem } from '../../types/cart';
import { CartContext } from '../../context/CartProvider';
import Price from '../ui/Price';
import { Divider, Typography } from '@mui/material';
import { spacings } from '../../styles/variables/variables';

interface CartListProps {
  items: CartItem[];
  total: number;
}

const CartList: React.FC<CartListProps> = ({ items, total }) => {
  const { clearCart } = useContext(CartContext);
  const { t } = useTranslation();

  const handleClearCartClick = () => {
    clearCart();
    //show toast
  };

  if (items.length === 0) {
    return (
      <Typography marginTop={spacings.spacingLarge} textAlign="center">
        {t('emptyCart')}
      </Typography>
    );
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      padding={spacings.spacingMedium}
      gap={spacings.spacingMedium}
    >
      <Box flex={1}>
        <List dense={true}>
          {items.map((item) => (
            <React.Fragment key={item.product.id}>
              <CartListItem item={item}></CartListItem>
              <Divider></Divider>
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box
        display="flex"
        justifyContent="end"
        alignItems="center"
        gap={spacings.spacingMedium}
      >
        <Typography textAlign="end">{t('total')}:</Typography>
        <Price value={total} />
      </Box>
      <Button onClick={handleClearCartClick} variant="contained">
        {t('clearCart')}
      </Button>
    </Box>
  );
};

export default CartList;
