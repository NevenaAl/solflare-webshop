import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api/services/product-service';
import { ErrorCodes } from '../api/query-client';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import { useEffect } from 'react';
import useToast from '../hooks/useToast';

const Home = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
    meta: { errCode: ErrorCodes.PRODUCTS_FETCH_FAILED },
  });
  const { addToast } = useToast();

  useEffect(() => {
    if (isError) {
      addToast({ message: error.message, severity: 'error' });
    }
  }, [isError, error]);

  return <ProductList isLoading={isLoading} products={data}></ProductList>;
};

export default Home;
