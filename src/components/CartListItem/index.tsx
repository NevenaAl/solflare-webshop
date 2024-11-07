import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import QuantityControl from '../ui/QuantityControl';
import { CartItem } from '../../types/cart';
import { CartContext } from '../../context/CartProvider';
import { Box, Typography } from '@mui/material';
import { spacings } from '../../styles/variables/variables';

interface CartItemProps {
  item: CartItem;
}

const CartListItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  const { t } = useTranslation();

  const handleRemoveClick = () => {
    removeFromCart(item);
    //show toast
  };

  const handleQuantityChange = (quantity: number) => {
    updateQuantity(item, quantity);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={handleRemoveClick} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={spacings.spacingLarge}
        flex={1}
      >
        <Box display="flex" flexDirection="column">
          <ListItemText primary={item.product.name} />
          <QuantityControl
            initialQuantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          ></QuantityControl>
        </Box>
        <Typography variant="body3">{item.price}</Typography>
      </Box>
    </ListItem>
  );
};

export default CartListItem;
