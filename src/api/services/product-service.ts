import { Product } from '../../types/product';
import { get } from '../axios-client';

export const getProducts = async () => {
  return await get<Product[]>('/products');
};

export const getProductDetails = async (id: number) => {
  const products = await get<Product[]>('/products');
  const product = products.find((product) => product.id === id);
  if (product) {
    return product;
  }
  throw Error('Error loading the product');
};
