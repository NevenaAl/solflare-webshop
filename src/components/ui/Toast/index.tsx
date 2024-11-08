import Alert, { AlertColor } from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import useToast from '../../../hooks/useToast';
import style from './Toast.module.scss';
interface ToastProps {
  id: number;
  message: string;
  severity?: AlertColor;
}

const Toast: React.FC<ToastProps> = ({ id, message, severity = 'success' }) => {
  const { removeToast } = useToast();

  const handleClose = () => {
    removeToast(id);
  };

  return (
    <Alert
      className={style.alert}
      onClose={handleClose}
      severity={severity}
      variant="filled"
    >
      <Typography variant="body1">{message}</Typography>
    </Alert>
  );
};

export default Toast;
