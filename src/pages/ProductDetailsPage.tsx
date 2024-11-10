import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductDetails } from '../api/services/product-service';
import { ErrorCodes } from '../api/query-client';
import { Product } from '../types/product';
import { ToastContext } from '../context/ToastProvider';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading, isError } = useQuery<Product, Error>({
    queryKey: ['productDetails', id],
    queryFn: () => getProductDetails(Number(id)),
    meta: { errCode: ErrorCodes.PRODUCT_DETAILS_FETCH_FAILED },
    enabled: !!id,
  });

  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    if (isError) {
      addToast({ message: error.message, severity: 'error' });
    }
  }, [isError, error]);

  return <ProductDetails isLoading={isLoading} product={data} />;
};

export default ProductDetailsPage;
