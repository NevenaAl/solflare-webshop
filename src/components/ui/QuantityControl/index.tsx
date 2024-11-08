import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { spacings } from '../../../styles/variables/variables';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface QuantityControlProps {
  initialQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const { t } = useTranslation();

  const handleIncreaseClick = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecreaseClick = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      }
      return prev;
    });
  };

  return (
    <Box display="flex" alignItems="center" gap={spacings.spacingMedium}>
      <Tooltip title={t('decreaseQuantity')}>
        <IconButton
          aria-label={t('decreaseQuantity')}
          color="primary"
          onClick={handleDecreaseClick}
        >
          <RemoveIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="body2">{quantity}</Typography>
      <Tooltip title={t('increaseQuantity')}>
        <IconButton
          aria-label={t('increaseQuantity')}
          color="primary"
          onClick={handleIncreaseClick}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default QuantityControl;
