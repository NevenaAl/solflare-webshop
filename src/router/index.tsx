import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';
import { BaseRoutes } from './routes';

const Layout = lazy(() => import('../components/Layout'));

const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: BaseRoutes.HOME,
        element: <Home />,
      },
      {
        path: BaseRoutes.PRODUCT,
        element: <ProductDetails />,
      },
    ],
  },
]);
