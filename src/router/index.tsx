import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

const Layout = lazy(() => import('../components/layout/MainLayout'));
const Home = lazy(() => import('../pages/HomePage'));
const ProductDetails = lazy(() => import('../pages/ProductDetailsPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));
const Loading = lazy(() => import('../pages/LoadingPage'));

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
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.PRODUCT,
        element: <ProductDetails />,
      },
    ],
  },
]);
