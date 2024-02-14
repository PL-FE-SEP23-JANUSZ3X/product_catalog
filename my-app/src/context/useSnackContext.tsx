import { useState, createContext, useContext, SetStateAction, Dispatch, ReactNode } from 'react';
import { Alert, Snackbar } from '@mui/material';

type Props = {
  children: ReactNode;
};

type Severity = "error" | "success" | "info" | "warning" | undefined;

type SnackBarType = {
  open: boolean,
  severity: Severity,
  message: string,
  autoHideDuration: number,
};

type SnackBarContextActions = {
  setSnack: Dispatch<SetStateAction<SnackBarType>>
};

const SnackBarContext = createContext({} as SnackBarContextActions);

export const SnackbarProvider = ({ children }: Props) => {
  const [snack, setSnack] = useState<SnackBarType>({
    open: false,
    severity: 'success',
    message: '',
    autoHideDuration: 0,
  });

  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({
      open: false,
      severity: 'success',
      message: '',
      autoHideDuration: 0,
    });
  };

  return (
    <SnackBarContext.Provider value={{ setSnack }}>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={snack.open}
        autoHideDuration={snack.autoHideDuration}
        onClose={handleClose}
        sx={{ margin: '24px' }}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
};

export const useSnackContext = () => useContext(SnackBarContext);