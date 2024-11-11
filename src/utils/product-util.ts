import { ProductDataValue } from '../types/product';

interface ProductTableData {
  label: string;
  value: string;
}

// Helper function to convert product data object (e.g. specifications, additionalInformation) to an array of label-value objects
export const getCovertedProductTableData = (
  data: Record<string, ProductDataValue>,
): ProductTableData[] => {
  return Object.entries(data).map(([label, value]) => ({
    label,
    value: Array.isArray(value) ? value.join(', ') : value.toString(),
  }));
};
