import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';

import { getProducts } from '../api/services/product-service';
import { ErrorCodes } from '../api/query-client';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import { ToastContext } from '../context/ToastProvider';

const HomePage = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
    meta: { errCode: ErrorCodes.PRODUCTS_FETCH_FAILED },
  });
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    if (isError) {
      addToast({ message: error.message, severity: 'error' });
    }
  }, [isError, error]);

  return <ProductList isLoading={isLoading} products={data}></ProductList>;
};

export default HomePage;
