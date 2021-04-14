import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Doctor } from '../../integration/BackendInterfaces';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import ConfirmDeletionDialog from './ConfirmDeletionDialog';
import AddDoctorDialog from './AddDoctorDialog';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
		addButton: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
		}

	}),
);

interface DoctorListDialogProps {
	openDialog: boolean;
	onClose: any;
}

export default function ManageDoctors(props: DoctorListDialogProps) {
	const { openDialog, onClose } = props;
	const classes = useStyles();
	const [ currentDoctors, setCurrentDoctors ] = useState([]);
	const [ selectedDoctor, setSelectedDoctor ] = useState<Doctor>();
	const [ deleteDialogOpen, setDeleteDialogOpen ] = React.useState(false);
	const [ addDoctorDialogOpen , setAddDoctorDialogOpen ] = React.useState(false);

	const openDeleteDialog = () => {
		setDeleteDialogOpen(true);
	}

	const closeDeleteDialog = () => {
		setDeleteDialogOpen(false);
	};
	
	const openAddDoctorDialog = () => {
		setAddDoctorDialogOpen(true);
		onClose();
	}
	
	const closeAddDoctorDialog = () => {
		setAddDoctorDialogOpen(false);
	};

	const deleteDoctor = (value: Doctor) => () => {
		setSelectedDoctor(value);
		openDeleteDialog();
		onClose();
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
			if(doctor.institution !== null){
				aux.push(doctor);
			}
		})
		setCurrentDoctors(aux);
	}

	useEffect(() => {
		getDoctors();
	}, []);

	return (
		<>
			<Dialog open={openDialog} onClose={onClose} fullWidth>
				<DialogTitle id="form-dialog-title">Gerenciar profissionais de saúde</DialogTitle>
				<DialogContent>
					<Box className={classes.addButton}>
						<Button onClick={openAddDoctorDialog} color="primary" variant="contained" startIcon={<AddIcon />}>
							Add médico
						</Button>
					</Box>
					<List dense className={classes.root}>
						{currentDoctors?.map((doctor: Doctor) => {
							const labelId = `checkbox-list-secondary-label-${doctor.doctorId}`;
							return (
								<ListItem key={doctor.doctorId} button>
									<ListItemAvatar>
										<Avatar
											alt={`Avatar n°${doctor.doctorId + 1}`}
										/>
									</ListItemAvatar>
									<ListItemText id={labelId} primary={`${doctor.doctorName}`} />
									<ListItemSecondaryAction>
										<IconButton edge="end" onClick={deleteDoctor(doctor)}>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							);
						})}
					</List>
				</DialogContent>
			</Dialog>
			<ConfirmDeletionDialog
				selectedDoctor={selectedDoctor}
				openDialog={deleteDialogOpen}
				onClose={closeDeleteDialog}
			/>
			<AddDoctorDialog
				openDialog={addDoctorDialogOpen}
				onClose={closeAddDoctorDialog}
			/>
		</>
	);
}