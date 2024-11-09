import Alert, { AlertColor } from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import style from './Toast.module.scss';
interface ToastProps {
  message: string;
  severity?: AlertColor;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  severity = 'success',
  onClose,
}) => {
  return (
    <Alert className={style.alert} onClose={onClose} severity={severity}>
      <Typography variant="body1">{message}</Typography>
    </Alert>
  );
};

export default Toast;
