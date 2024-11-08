import { AlertColor } from '@mui/material/Alert';

export interface Toast {
  id: number;
  timeout?: number;
  severity?: AlertColor;
  message: string;
}
