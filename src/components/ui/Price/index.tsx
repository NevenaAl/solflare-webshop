import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getFormattedPrice } from '../../../utils/price-util';
import { Variant } from '@mui/material/styles/createTypography';

interface PriceProps {
  value: number;
  currency?: string;
  decimalPlaces?: number;
  typographyVariant?: Variant;
}

const Price: React.FC<PriceProps> = ({
  value,
  currency = 'USD',
  decimalPlaces = 2,
  typographyVariant = 'body2',
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const formattedPrice = useMemo(
    () => getFormattedPrice(language, currency, decimalPlaces, value),
    [value, currency, decimalPlaces, language],
  );

  return <Typography variant={typographyVariant}>{formattedPrice}</Typography>;
};

export default Price;
