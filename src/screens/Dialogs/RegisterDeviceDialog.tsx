import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from 'react-hook-form';
import { DeviceData, initialDeviceData } from './utils/RegisterPatientUtils';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as deviceActions from '../../store/device/deviceActions';
import SearchPatient from './SearchPatient';

interface RegisterDeviceProps {
  openDialog: boolean;
  onClose: any;
}

export default function RegisterDeviceDialog(props: RegisterDeviceProps) {
  const { openDialog, onClose } = props;
  const { handleSubmit } = useForm<DeviceData>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
  const [ deviceData, setDeviceData] = useState({ ...initialDeviceData });
	
	const updateDeviceData = (newData: DeviceData) => setDeviceData(newData);

  const handleCloseSuccessMessage = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') { return; }
    setOpenSuccessMessage(false);
  };

  const onRegisterClick = handleSubmit(async () => {
    setSubmitting(true);

    const response = await fetch("/device/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
        "Access-Control-Allow-Methods": 'POST',
        "Access-Control-Allow-Headers": 'Content-Type, Authorization'
      },
      body: JSON.stringify({
        deviceId: deviceData.deviceId,
        model: deviceData.model,
        operatingSystem: deviceData.operatingSystem,
        owner: deviceData.owner
      })
    });

    deviceActions.createDevice(response);

    setSubmitting(false);
    setOpenSuccessMessage(true);
  });

  const inputChangeHandler = (event: any, id: string) => {
    let newData: any = {...deviceData};
    newData[id] = event.target.value;
    updateDeviceData(newData);
  }
  

  return (
    <>
      <div>
        <Dialog open={openDialog} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Cadastrar dispositivo</DialogTitle>
          <DialogContent>
            <TextField
                autoFocus
                onChange={event => inputChangeHandler(event, 'deviceId')}
                margin="dense"
                id="deviceId"
                name="deviceId"
                label="Identificador"
                fullWidth
              />
            <TextField
              autoFocus
              onChange={event => inputChangeHandler(event, 'operatingSystem')}
              margin="dense"
              id="operatingSystem"
              name="operatingSystem"
              label="Sistema Operacional"
              fullWidth
            />
            <TextField
              margin="dense"
              id="model"
              onChange={event => inputChangeHandler(event, 'model')}
              label="Modelo"
              type="model"
              fullWidth
            />
            <SearchPatient deviceData={deviceData}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancelar
          </Button>
            <Button onClick={onRegisterClick} color="primary" variant="contained" disabled={submitting}>
              Cadastrar
          </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Snackbar open={openSuccessMessage} autoHideDuration={6000} onClose={handleCloseSuccessMessage}>
        <Alert onClose={handleCloseSuccessMessage} severity="success">
          Paciente cadastrado!
        </Alert>
      </Snackbar>
    </>

  );
}