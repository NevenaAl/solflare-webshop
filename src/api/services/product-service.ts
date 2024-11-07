import { Product } from '../../types/product';
import { get } from '../axios-client';

export const getProducts = async () => {
  return get<Product[]>('/products');
};
