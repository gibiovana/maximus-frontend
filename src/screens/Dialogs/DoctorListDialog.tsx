import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { Doctor, Institution } from '../../integration/BackendInterfaces';
import { PatientData } from './utils/RegisterPatientUtils';
import * as patientActions from '../../store/patient/patientActions';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm } from 'react-hook-form';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	}),
);

interface DoctorListDialogProps {
	patientData: PatientData;
	openDialog: boolean;
	onClose: any;
}

export default function DoctorListDialog(props: DoctorListDialogProps) {
	const { patientData, openDialog, onClose } = props;
	const classes = useStyles();
	const [currentDoctors, setCurrentDoctors] = useState([]);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const { handleSubmit } = useForm<PatientData>();
	const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
	const [assignedDoctors, setAssignedDoctors] = useState([]);
	const [institutions, setInstitutions] = useState([]);
	const [chosenInstitution, setChosenInstitution] = useState<number>();

	const handleCloseSuccessMessage = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') { return; }
		setOpenSuccessMessage(false);
	};

	let aux: any = [];

	const handleToggle = (value: Doctor) => () => {
		const checkbox = document.getElementById('doctorCheckbox') as any;
		if (checkbox.checked) {
			aux.push(value);
			setAssignedDoctors(aux);
		}
	};

	function findInstitution() {
		const selected = institutions.find((hospital: Institution) => hospital.institutionId.toString() === chosenInstitution);
		if(selected){
			patientData.institution = selected
		}
	}

	const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const selectedId = event.target.value as keyof typeof chosenInstitution;
		setChosenInstitution(selectedId);
	};

	async function getInstitutions() {
		const response = await fetch(`/institution/all`, {
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
		data.forEach((institution: Institution) => {
			aux.push(institution);
		})
		setInstitutions(aux);
	}

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
		getInstitutions();
	}, []);

	const onRegisterClick = handleSubmit(async () => {
		setSubmitting(true);
		findInstitution();
		const response = await fetch("/patient/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'POST',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			},
			body: JSON.stringify({
				name: patientData.name,
				username: patientData.username,
				password: patientData.password,
				prontuary: patientData.prontuary,
				pathologicalCondition: patientData.pathologicalCondition,
				patientWeight: patientData.patientWeight,
				patientHeight: patientData.patientHeight,
				birthdate: patientData.birthdate,
				institution: patientData.institution,
				doctorsAssigned: assignedDoctors
			})
		});

		patientActions.createPatient(response);

		setSubmitting(false);
		setOpenSuccessMessage(true);
	});

	return (
		<>
			<Dialog open={openDialog} onClose={onClose} fullWidth>
				<DialogTitle id="form-dialog-title">Vincular médicos</DialogTitle>
				<DialogContent>
					<InputLabel id="demo-mutiple-chip-label">Institutição de saúde</InputLabel>
					<Select
						native
						fullWidth
						value={chosenInstitution}
						onChange={handleChange}
						inputProps={{
							name: 'Institution',
							id: 'inputInstitution',
						}}>
						<option aria-label="None" value="" />
						{institutions?.map((institution: Institution) => {
							return <option value={institution.institutionId} key={institution.institutionId}>
								{institution.institutionName}
							</option>
						})}
					</Select>
					<InputLabel style={{ marginTop: '2rem' }}>Pediatras responsáveis</InputLabel>
					<List dense className={classes.root}>
						{currentDoctors?.map((doctor: Doctor) => {
							const labelId = `checkbox-list-secondary-label-${doctor.doctorId}`;
							return (
								<ListItem key={doctor.doctorId} button>
									<ListItemAvatar>
										<Avatar
											alt={`Avatar n°${doctor.doctorId + 1}`}
											src={`/static/images/avatar/${doctor.doctorId + 1}.jpg`}
										/>
									</ListItemAvatar>
									<ListItemText id={labelId} primary={`${doctor.doctorName}`} />
									<ListItemSecondaryAction>
										<Checkbox
											id="doctorCheckbox"
											edge="end"
											onChange={handleToggle(doctor)}
											inputProps={{ 'aria-labelledby': labelId }}
										/>
									</ListItemSecondaryAction>
								</ListItem>
							);
						})}
					</List>
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
					Paciente cadastrado!
		</Alert>
			</Snackbar>
		</>
	);
}