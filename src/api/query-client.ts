import {
  DefaultError,
  Query,
  QueryCache,
  QueryClient,
} from '@tanstack/react-query';

export const ErrorCodes = {
  PRODUCTS_FETCH_FAILED: 'PRODUCTS_FETCH_FAILED',
} as const;

const handleQueryCacheError = (
  error: DefaultError,
  query: Query<unknown, unknown, unknown>,
) => {
  if (process.env.NODE_ENV === 'development') {
    switch (query.meta?.errCode) {
      case ErrorCodes.PRODUCTS_FETCH_FAILED:
        console.log('Error with fetching products query: ', error);
        break;
      default:
        console.log('Unknown query error: ', error);
        break;
    }
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleQueryCacheError,
  }),
});
