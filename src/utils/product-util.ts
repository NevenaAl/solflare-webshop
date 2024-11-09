import { ProductDataType } from '../types/product';

interface ProductTableData {
  label: string;
  value: ProductDataType;
}

// Helper function to convert product data object (e.g. specifications, additionalInformation) to an array of label-value objects
export const getCovertedProductTableData = (
  data: Record<string, ProductDataType>,
): ProductTableData[] => {
  return Object.entries(data).map(([label, value]) => ({
    label,
    value: Array.isArray(value) ? value.join(', ') : value.toString(),
  }));
};
