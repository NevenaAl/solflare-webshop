import { Product } from '../../types/product';
import { get } from '../axios-client';

export const getProducts = async () => {
  return await get<Product[]>('/products');
};

// This method is mocking the API for product details with calling the base API and returning only requested product
export const getProductDetails = async (id: number) => {
  const products = await get<Product[]>('/products');
  const product = products.find((product) => product.id === id);
  if (product) {
    return product;
  }
  throw Error('Error loading the product');
};
