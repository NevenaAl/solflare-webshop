import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api';

const Home = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <ProductList isLoading={isLoading} products={data ?? []}></ProductList>
  );
};

export default Home;
