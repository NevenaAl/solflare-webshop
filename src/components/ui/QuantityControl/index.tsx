import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { spacings } from '../../../styles/variables/variables';

interface QuantityControlProps {
  initialQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

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
      <IconButton color="primary" onClick={handleDecreaseClick}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body2">{quantity}</Typography>
      <IconButton color="primary" onClick={handleIncreaseClick}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityControl;
