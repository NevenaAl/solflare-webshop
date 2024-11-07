import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CartListItem from '../CartListItem';
import { CartItem } from '../../types/cart';
import { CartContext } from '../../context/CartProvider';

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
  //TODO handle empty list
  return (
    <Box>
      <List dense={true}>
        {items.map((item) => (
          <CartListItem key={item.product.id} item={item}></CartListItem>
        ))}
      </List>
      {total}
      <Button onClick={handleClearCartClick} variant="contained">
        {t('clearCart')}
      </Button>
    </Box>
  );
};

export default CartList;
