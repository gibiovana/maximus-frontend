import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoctorListDialog from './DoctorListDialog';
import { initialPatientData, PatientData } from './utils/RegisterPatientUtils';

interface RegisterPatientProps {
  openDialog: boolean;
  onClose: any;
}

export default function RegisterPatient(props: RegisterPatientProps) {
  const { openDialog, onClose } = props;
  const [doctorsList, setDoctorsListOpen] = useState(false);
  const [patientData, setPatientData] = useState({ ...initialPatientData });

  const updatePatientData = (newData: PatientData) => setPatientData(newData);
  
  const inputChangeHandler = (event: any, id: string) => {
    let newData: any = {...patientData};
    newData[id] = event.target.value;
    updatePatientData(newData);
  }
  
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
            id="name"
            name="name"
            label="Nome do paciente"
            onChange={event => inputChangeHandler(event, 'name')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="E-mail"
            type="email"
            name="username"
            onChange={event => inputChangeHandler(event, 'username')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={event => inputChangeHandler(event, 'password')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="prontuary"
            name="prontuary"
            label="Prontuário"
            onChange={event => inputChangeHandler(event, 'prontuary')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="pathologicalCondition"
            name="pathologicalCondition"
            label="Condição patológica"
            onChange={event => inputChangeHandler(event, 'pathologicalCondition')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="patientHeight"
            name="patientHeight"
            label="Altura"
            onChange={event => inputChangeHandler(event, 'patientHeight')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="patientWeight"
            name="patientWeight"
            label="Peso"
            onChange={event => inputChangeHandler(event, 'patientWeight')}
            fullWidth
          />
          <TextField
            id="birthdate"
            label="Data de Nascimento"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => inputChangeHandler(event, 'birthdate')}
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
        patientData={patientData}
        openDialog={doctorsList}
        onClose={closeDoctorListDialog}
      />
    </div>
  );
}