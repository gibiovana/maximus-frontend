import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoctorListDialog from './DoctorListDialog';

interface RegisterPatientProps {
    openDialog: boolean;
    onClose: any;
}

export default function RegisterPatient(props: RegisterPatientProps) {
  const { openDialog, onClose } = props;
	const [ doctorsList, setDoctorsListOpen] = React.useState(false);

  const onNextClick = () => {
    setDoctorsListOpen(true);
    onClose();
	};

  const closeDoctorListDialog = () => {
		setDoctorsListOpen(false);
	};

  return (
    <div>
      <Dialog open={openDialog} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastrar paciente</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="patientName"
            name="patientName"
            label="Nome do paciente"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="E-mail"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="prontuary"
            name="prontuary"
            label="Prontuário"
            fullWidth
          />
          <TextField
            margin="dense"
            id="pathologicalCondition"
            name="pathologicalCondition"
            label="Condição patológica"
            fullWidth
          />
          <TextField
            margin="dense"
            id="patientHeight"
            name="patientHeight"
            label="Altura"
            fullWidth
          />
          <TextField
            margin="dense"
            id="patientWeight"
            name="patientWeight"
            label="Peso"
            fullWidth
          />
        <TextField
            id="birthdate"
            label="Data de Nascimento"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onNextClick} color="primary" variant="contained">
            Próximo
          </Button>
        </DialogActions>
      </Dialog>
      <DoctorListDialog
          openDialog={doctorsList}
          onClose={closeDoctorListDialog}
        />
    </div>
  );
}