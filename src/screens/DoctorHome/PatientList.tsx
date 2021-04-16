/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Patient } from '../../integration/BackendInterfaces';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import * as patientActions from '../../store/patient/patientActions';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxHeight: '30rem',
			margin: '5rem',
			backgroundColor: '#FFFFFF',
		},
		inline: {
			display: 'grid',
		},
		avatar: {
			color: '#fff',
			backgroundColor: '#9732a8',
		},
	}),
);

export default function SearchPatient() {
	const [patients, setPatients] = useState([]);
	let history = useHistory();
	const classes = useStyles();

	const handleToggle = (value: Patient) => async () => {
		history.push(`/patient/${value.patientId}`);
		window.location.reload();
	};

	async function getPatients() {
		const response = await fetch(`/patient/all`, {
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
		data.forEach((patient: Patient) => {
			aux.push(patient);
		})
		setPatients(aux);
	}

	useEffect(() => {
		getPatients();
	}, []);

	return (
		<div>
			<List dense className={classes.root}>
				{patients?.map((patient: Patient) => {
					const labelId = `checkbox-list-secondary-label-${patient.patientId}`;
					return (
						<ListItem key={patient.patientId} button>
							<ListItemAvatar>
								<Avatar
									alt={`Avatar n°${patient.patientId + 1}`}
									className={classes.avatar}
								/>
							</ListItemAvatar>
							<ListItemText
								id={labelId}
								primary={<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="primary"
									>
										{`${patient.name}`}
									</Typography>
								</React.Fragment>}
								secondary={
									<>
										<React.Fragment>
											<Typography
												component="span"
												variant="body2"
												className={classes.inline}
												color="textPrimary"
											>
												Prontuário: {`${patient.prontuary}`}
											</Typography>
										</React.Fragment>
										<React.Fragment>
											<Typography
												component="span"
												variant="body2"
												className={classes.inline}
												color="textPrimary">
												Condição patológica: {`${patient.pathologicalCondition}`}
											</Typography>
										</React.Fragment>
									</>
								} />
							<ListItemSecondaryAction>
								<IconButton
									id="patientButton"
									aria-label="nextPage"
									onClick={handleToggle(patient)}>
									<NavigateNextIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
}
