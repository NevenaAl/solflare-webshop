import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';

import Toast from '../../ui/Toast';
import { spacings } from '../../../styles/variables/variables';
import { ToastContext } from '../../../context/ToastProvider';

const ToastsSnackbar = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  const handleOnClose = (id: number) => {
    removeToast(id);
  };

  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      {/* Note: using Stack and Snackbar together causes known error (see https://github.com/mui/material-ui/issues/35649) */}
      {toasts.length > 0 ? (
        <Stack flexDirection="column" gap={spacings.spacingMedium}>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              severity={toast.severity}
              onClose={() => handleOnClose(toast.id)}
            />
          ))}
        </Stack>
      ) : (
        <Box />
      )}
    </Snackbar>
  );
};

export default ToastsSnackbar;
