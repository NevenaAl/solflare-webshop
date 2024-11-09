import { useState, useCallback, ReactNode, createContext } from 'react';
import { Toast } from '../types/toast';

export const DEFAULT_TOAST_TIMEOUT = 4000;

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (toastId: number) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

// ToastContext provides a global state and functions for managing toast notifications
// It allows components to add, remove, and display toasts throughout the app
// It serves as centralized service to avoid adding Toast component and managing it's state on multiple places (due to how MaterialUI handles it)
export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType,
);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const newToast = { ...toast, id: new Date().getTime() }; // Set the id to the current timestamp
    setToasts((prevToasts) => [...prevToasts, newToast]);
    const appliedTimeout = toast.timeout ?? DEFAULT_TOAST_TIMEOUT;
    if (appliedTimeout > 0) {
      setTimeout(() => removeToast(newToast.id), appliedTimeout);
    }
  };

  const removeToast = (toastId: number): void => {
    setToasts((toastList) => toastList.filter((toast) => toast.id !== toastId));
  };

  const contextValue = {
    toasts,
    addToast: useCallback((toast: Omit<Toast, 'id'>) => addToast(toast), []),
    removeToast: useCallback((toastId: number) => removeToast(toastId), []),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
