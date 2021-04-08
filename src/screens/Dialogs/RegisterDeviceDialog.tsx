import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface RegisterDeviceProps {
    openDialog: boolean;
    onClose: any;
}

export default function RegisterDeviceDialog(props: RegisterDeviceProps) {
  const { openDialog, onClose } = props;

  return (
    <div>
      <Dialog open={openDialog} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastrar dispositivo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="operatingSystem"
            name="operatingSystem"
            label="Sistema Operacional"
            fullWidth
          />
          <TextField
            margin="dense"
            id="model"
            label="Modelo"
            type="model"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClose} color="primary" variant="contained">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}