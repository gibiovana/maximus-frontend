import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { Doctor, Patient } from '../../integration/BackendInterfaces';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import * as diagnosisActions from '../../store/diagnosis/diagnosisActions';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface AddDiagnosisProps {
  patientData: Patient | null;
	openDialog: boolean;
	onClose: any;
}

interface DiagnosisData {
	diagnosisId: number,
  diagnosisDate: Date,
  description: string,
  author: Doctor,
  patient: Patient
}


export default function DoctorListDialog(props: AddDiagnosisProps) {
	const { patientData, openDialog, onClose } = props;
	const [currentDoctors, setCurrentDoctors] = useState([]);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const { register, handleSubmit } = useForm<DiagnosisData>();
	const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
	const [chosenDoctor, setChosenDoctor] = useState<String>();

	const handleCloseSuccessMessage = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') { return; }
		setOpenSuccessMessage(false);
	};

	let selectedDoctor: Doctor | undefined ;

	function findDoctor() {
		const selected = currentDoctors.find((doctor: Doctor) => doctor.doctorName === chosenDoctor);
		selectedDoctor = selected;
	}


	const handleChangeDoctor = (event: React.ChangeEvent<{}>, value: string | null) => {
		const selectedId = value as keyof typeof chosenDoctor;
		setChosenDoctor(selectedId);
	};

	async function getDoctors() {
		const response = await fetch(`/doctor/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'GET',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			}
		});

		const data = await response.json();
		let aux: any = [];
		data.forEach((doctor: Doctor) => {
			aux.push(doctor);
		})
		setCurrentDoctors(aux);
	}

	useEffect(() => {
		getDoctors();
	}, []);

	const onRegisterClick = handleSubmit(async (diagnosisData) => {
		setSubmitting(true);
		findDoctor();

    const response = await fetch(`/diagnosis/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'POST',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			},
			body: JSON.stringify({
				diagnosisId: diagnosisData.diagnosisId,
				diagnosisDescription: diagnosisData.description,
        diagnosisDate: diagnosisData.diagnosisDate,
				author: selectedDoctor,
				patient: patientData,
		})
  });
    diagnosisActions.createDiagnosis(response);
		setSubmitting(false);
		setOpenSuccessMessage(true);
	});

	return (
		<>
			<Dialog open={openDialog} onClose={onClose} fullWidth>
				<DialogTitle id="form-dialog-title">Criar diagnóstico</DialogTitle>
				<DialogContent>
				<Autocomplete
          id="search-doctors"
          freeSolo
          fullWidth
          onChange={handleChangeDoctor}
          options={currentDoctors.map((option: Doctor) => option.doctorName)}
          renderInput={(params) => (
            <TextField {...params} label="Pediatra responsável" margin="normal" />
          )}
        />
          <InputLabel id="demo-mutiple-chip-label" style={{marginTop: '2rem'}}>Descrição</InputLabel>
          <TextareaAutosize 
            aria-label="minimum height" 
            rowsMin={3} 
            style={{width:'100%', marginTop: '1rem'}}
            id="description"
            name="description"
            ref={register({
							required: "Campo obrigatório"
						})}
          />
          <TextField
            fullWidth
            id="diagnosisDate"
            name="diagnosisDate"
            label="Data e hora"
            type="datetime-local"
            defaultValue="2020-05-24T10:30"
            style={{marginTop: '1rem'}}
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({
							required: "Campo obrigatório"
						})}
          />
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose} color="primary">
						Cancelar
          </Button>
					<Button onClick={onRegisterClick} disabled={submitting} color="primary" variant="contained">
						Cadastrar
          </Button>
				</DialogActions>
			</Dialog>
			<Snackbar open={openSuccessMessage} autoHideDuration={6000} onClose={handleCloseSuccessMessage}>
				<Alert onClose={handleCloseSuccessMessage} severity="success">
				Diagnóstico adicionado!
		</Alert>
			</Snackbar>
		</>
	);
}