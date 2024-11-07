import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import { SyntheticEvent, useState } from 'react';
import Typography from '@mui/material/Typography';

interface ToastProps {
  isOpen: boolean;
  message: string;
  severity?: AlertColor;
}

const Toast: React.FC<ToastProps> = ({
  isOpen,
  message,
  severity = 'success',
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} variant="outlined">
        <Typography variant="body2">{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default Toast;
