import axios, { AxiosRequestConfig } from 'axios';

const { REACT_APP_BASE_API } = process.env;

const axiosClient = axios.create({
  baseURL: REACT_APP_BASE_API,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = async <ResponseType>(
  endpoint: string = '',
  options: AxiosRequestConfig = {},
): Promise<ResponseType> => {
  try {
    const response = await axiosClient.get<ResponseType>(endpoint, options);
    return response.data;
  } catch (error) {
    return handleHttpError(error);
  }
};

const handleHttpError = (error: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    if (axios.isAxiosError(error)) {
      console.log('Axios error: ', error);
    } else {
      console.log('Unknown error: ', error);
    }
  }
  throw error;
};
