import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Doctor } from '../../integration/BackendInterfaces';
import { useForm } from 'react-hook-form';
import * as doctorActions from '../../store/doctor/doctorActions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ConfirmDeletionDialogProps {
  selectedDoctor: Doctor | undefined;
	openDialog: boolean;
	onClose: any;
}
 
export default function ConfirmDeletionDialog(props: ConfirmDeletionDialogProps) {
	const { selectedDoctor, openDialog, onClose } = props;
	const [ submitting, setSubmitting ] = useState<boolean>(false);
	const { handleSubmit } = useForm<Doctor>();

  const onConfirm = handleSubmit(async () => {
		setSubmitting(true);

		const response = await fetch(`/doctor/update/${selectedDoctor?.doctorId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'PUT',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			},
			body: JSON.stringify({
				doctorId: selectedDoctor?.doctorId,
				doctorName: selectedDoctor?.doctorName,
				doctorCRM: selectedDoctor?.doctorCRM,
				doctorEmail: selectedDoctor?.doctorEmail,
				password: selectedDoctor?.password,
        institution: null
			})
		});

		doctorActions.updateDoctor(response)
		setSubmitting(false);

    onClose();
	});

  return (
    <div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Deseja remover este médico de sua instituição?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Médico: {selectedDoctor?.doctorName} <br></br>
						CRM: {selectedDoctor?.doctorCRM} <br></br>
						E-mail: {selectedDoctor?.doctorEmail}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} disabled={submitting} color="primary" variant="contained">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
