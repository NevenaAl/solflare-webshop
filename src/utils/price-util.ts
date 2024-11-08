export const getFormattedPrice = (
  language: string,
  currency: string,
  decimalPlaces: number,
  value: number,
) => {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
};
