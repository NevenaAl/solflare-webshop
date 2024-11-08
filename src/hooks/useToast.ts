import { useContext } from 'react';

import { DEFAULT_TOAST_TIMEOUT, ToastContext } from '../context/ToastProvider';
import { Toast } from '../types/toast';

// The `useToast` hook provides a way for components to interact with the global Toast context.
// It allows adding, removing, and accessing toasts as well as auto-removal after a timeout.
const useToast = () => {
  const {
    toasts,
    addToast: addToastContext,
    removeToast,
  } = useContext(ToastContext);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const toastId = addToastContext(toast);
    let appliedTimeout = toast.timeout ?? DEFAULT_TOAST_TIMEOUT;
    if (appliedTimeout > 0)
      setTimeout(() => removeToast(toastId), appliedTimeout);
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
