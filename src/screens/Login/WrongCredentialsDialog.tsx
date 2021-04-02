import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';

interface WrongCredentialsProps {
  openDialog: boolean;
  onClose: any;
}

export default function WrongCredentialsDialog(props: WrongCredentialsProps) {
  const { openDialog, onClose } = props;

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Credenciais incorretas"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Usuário ou senha incorretos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}