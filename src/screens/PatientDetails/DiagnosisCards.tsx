import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Diagnosis, Patient } from '../../integration/BackendInterfaces';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: '1rem',
		fontFamily: 'Comfortaa',
    font: 'Comfortaa',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
		fontFamily: 'Comfortaa',
    font: 'Comfortaa',
	},
	texts: {
		fontFamily: 'Comfortaa',
    font: 'Comfortaa',
	},
	pos: {
		marginBottom: 12,
		fontFamily: 'Comfortaa',
    font: 'Comfortaa',
	},
});

interface AddDiagnosisProps {
	patientData: Patient | null;
}

export default function DiagnosisCards(props: AddDiagnosisProps) {
	const { patientData } = props;
	const [diagnosisList, setDiagnosis] = useState([]);
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	async function getDiagnosisFromPatient(patientData: Patient | null) {
		const response = await fetch(`/diagnosis/patient/${patientData?.patientId}`, {
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
		data.forEach((diagnosis: Diagnosis) => {
			aux.push(diagnosis);
		})
		setDiagnosis(aux);
	}

	useEffect(() => {
		if (patientData) {
			getDiagnosisFromPatient(patientData);
		}
	}, [patientData]);

	return (
		<>
			{diagnosisList.map((diagnosis: Diagnosis) => {
				let date = new Date(diagnosis.diagnosisDate);
				let UTCstring = date.toLocaleString();
				return (
					<Card className={classes.root}>
						<CardContent>
							<Typography className={classes.title} color="textSecondary" gutterBottom>
								{UTCstring}
							</Typography>
							<Typography variant="h5" component="h2" className={classes.texts}>
								Diagnósico - {diagnosis.diagnosisId}
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								{diagnosis.author.doctorName}
							</Typography>
							<Typography variant="body2" component="p" className={classes.texts}>
								{diagnosis.diagnosisDescription}
							</Typography>
						</CardContent>
					</Card>
				)
			})}
		</>
	);
}