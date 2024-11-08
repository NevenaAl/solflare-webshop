import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getFormattedPrice } from '../../../utils/price-util';

interface PriceProps {
  value: number;
  currency?: string;
  decimalPlaces?: number;
}

const Price: React.FC<PriceProps> = ({
  value,
  currency = 'USD',
  decimalPlaces = 2,
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const formattedPrice = useMemo(
    () => getFormattedPrice(language, currency, decimalPlaces, value),
    [value, currency, decimalPlaces, language],
  );

  return <Typography variant="body2">{formattedPrice}</Typography>;
};

export default Price;
