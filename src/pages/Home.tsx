import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import { useQuery } from '@tanstack/react-query';
import { ErrorCodes, getProducts } from '../api';
import Toast from '../components/ui/Toast';

const Home = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
    meta: { errCode: ErrorCodes.PRODUCTS_FETCH_FAILED },
  });

  if (isError)
    return (
      <Toast isOpen={true} severity="error" message={error.message}></Toast>
    );

  return <ProductList isLoading={isLoading} products={data}></ProductList>;
};

export default Home;
