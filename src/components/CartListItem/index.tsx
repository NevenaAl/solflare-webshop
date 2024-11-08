import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import QuantityControl from '../ui/QuantityControl';
import { CartItem } from '../../types/cart';
import { CartContext } from '../../context/CartProvider';
import { spacings } from '../../styles/variables/variables';
import Price from '../ui/Price';
import style from './CartListItem.module.scss';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip title={t('remove')}>
          <IconButton
            onClick={handleRemoveClick}
            edge="end"
            aria-label={t('remove')}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
      className={style.item}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={spacings.spacingLarge}
        flex={1}
      >
        <Box className={style.item__info} display="flex" flexDirection="column">
          <Typography variant="body2" className={style.item__info__name}>
            {item.product.name}
          </Typography>
          <QuantityControl
            initialQuantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          ></QuantityControl>
        </Box>
        <Price value={item.price} />
      </Box>
    </ListItem>
  );
};

export default CartListItem;
