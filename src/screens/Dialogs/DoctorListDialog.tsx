import React, { Dispatch, useEffect, useState } from 'react';
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
import { Doctor } from '../../integration/BackendInterfaces';
import { connect } from 'react-redux';
import * as doctorActions from '../../store/doctor/doctorActions';
import { Store } from '../../store/types';


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
	openDialog: boolean;
	onClose: any;
}

export default function DoctorListDialog(props: DoctorListDialogProps) {
	const { openDialog, onClose } = props;
	const classes = useStyles();
	const [checked, setChecked] = React.useState([1]);
	const [currentDoctors, setCurrentDoctors] = useState([]);
	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
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

	getDoctors();

	return (
		<Dialog open={openDialog} onClose={onClose} fullWidth>
			<DialogTitle id="form-dialog-title">Vincular médicos</DialogTitle>
			<DialogContent>
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
										edge="end"
										onChange={handleToggle(doctor.doctorId)}
										checked={checked.indexOf(doctor.doctorId) !== -1}
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
				<Button onClick={onClose} color="primary" variant="contained">
					Cadastrar
          </Button>
			</DialogActions>
		</Dialog>
	);
}