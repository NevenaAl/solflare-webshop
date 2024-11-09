import Alert, { AlertColor } from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import style from './Toast.module.scss';
import { ToastContext } from '../../../context/ToastProvider';
import { useContext } from 'react';
interface ToastProps {
  id: number;
  message: string;
  severity?: AlertColor;
}

const Toast: React.FC<ToastProps> = ({ id, message, severity = 'success' }) => {
  const { removeToast } = useContext(ToastContext);

  const handleClose = () => {
    removeToast(id);
  };

  return (
    <Alert className={style.alert} onClose={handleClose} severity={severity}>
      <Typography variant="body1">{message}</Typography>
    </Alert>
  );
};

export default Toast;
