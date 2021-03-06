import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import doctorImage from '../../assets/Radiography-amico.png';
import logo from '../../assets/logo.png';
import registerPatient from '../../assets/Children-pana.png';
import registerDevice from '../../assets/Mobile apps-amico.png';
//import deviceToPatient from '../../assets/Devices-rafiki.png';
import accessDocuments from '../../assets/Documents-rafiki.png';
//import child from '../../assets/Child-pana.png';
import doctors from '../../assets/Doctors-pana.png';
import "@fontsource/comfortaa/300.css"
import HomeButton from './HomeButton';
import HomeStyles from './HomeStyles.jss';
import RegisterPatientDialog from '../Dialogs/RegisterPatientDialog';
import RegisterDeviceDialog from '../Dialogs/RegisterDeviceDialog';
import { Button } from '@material-ui/core';
import DocumentsDialog from '../Dialogs/DocumentsDialog';
import ManageDoctors from '../Dialogs/ManageDoctors';
import { logout } from '../../api/auth';
import { useHistory } from 'react-router';

export default function Home() {
	const classes = HomeStyles();
	let history = useHistory();
	const [patientDialog, setPatientDialogOpen] = React.useState(false);
	const [deviceDialog, setDeviceDialogOpen] = React.useState(false);
	const [documentsDialog, setDocumentsDialogOpen] = React.useState(false);
	const [manageDoctorDialog, setManageDoctorsDialog] = React.useState(false);

	const openPatientDialog = () => {
		setPatientDialogOpen(true);
	};

	const openDeviceDialog = () => {
		setDeviceDialogOpen(true);
	}

	const openDocumentsDialog = () => {
		setDocumentsDialogOpen(true);
	}

	const openManageDoctorsDialog = () => {
		setManageDoctorsDialog(true);
	}

	const closePatientDialog = () => {
		setPatientDialogOpen(false);
	};

	const closeDeviceDialog = () => {
		setDeviceDialogOpen(false);
	};

	const closeDocumentsDialog = () => {
		setDocumentsDialogOpen(false);
	}

	const closeManageDoctorsDialog = () => {
		setManageDoctorsDialog(false);
	}

	const onLogoutClick = () => {
		logout();
		history.push('/login');
	}

	return (
		<>
			<Grid container className={classes.header}>
				<Grid item xs className={classes.header}>
					<img className={classes.avatar} src={logo} alt="Maximus logo" />
					<Typography component="h1" variant="h5" className={classes.title}>
						MAXIMUS
            </Typography>
				</Grid>
				<Grid item xs className={classes.actions}>
					<Button onClick={onLogoutClick} className={classes.title} style={{ marginRight: '1rem' }}>
						{"Sair"}
					</Button>
				</Grid>
			</Grid>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={12} sm={8} md={5} component={Paper} square className={classes.login}>
					<div className={classes.paper}>
						<Typography component="h4" variant="h5" className={classes.title}>
							Bem-vindo ?? p??gina inicial de Maximus!
                </Typography>
						<Typography component="h5" variant="h6" className={classes.subtitle}>
							Escolha uma das funcionalidades
                </Typography>
						<img src={doctorImage} className={classes.doctor} alt="Doctor icon" />
					</div>
				</Grid>
				<Grid item xs={false} sm={6} md={7} className={classes.functions}>
					<Grid container spacing={1} alignItems="center" justify="center">
						<Grid container item sm={6} xs={6} md={6} lg={6} spacing={3}>
							<HomeButton
								title="Cadastrar paciente"
								description="Incluir paciente ?? Maximus."
								imageUrl={`${registerPatient}`}
								onClick={openPatientDialog} />
						</Grid>
						<Grid container item sm={6} xs={6} md={6} lg={6} spacing={3}>
							<HomeButton
								title="Cadastrar dispositivo"
								description="Adicionar novo item ?? lista de dispositivos dispon??veis."
								imageUrl={`${registerDevice}`}
								onClick={openDeviceDialog} />
						</Grid>
						{/*<Grid container item sm={6} xs={6} md={4} lg={4} spacing={3}>
							<HomeButton
								title="Vincular paciente ao dispositivo"
								description="Associar o dispositivo a ser utilizado pelo paciente."
								imageUrl={`${deviceToPatient}`}
								onClick={null} />
						</Grid>*/}
						{/*<Grid container item sm={6} xs={6} md={4} lg={4}spacing={3}>
							<HomeButton
								title="Gerenciar pacientes"
								description="Analisar os pacientes vinculados ?? Institui????o."
								imageUrl={`${child}`}
								onClick={null} />
						</Grid>*/}
						<Grid container item sm={6} xs={6} md={6} lg={6} spacing={3}>
							<HomeButton
								title="Gerenciar m??dicos"
								description="Analisar os profissionais de sa??de vinculados ?? Institui????o."
								imageUrl={`${doctors}`}
								onClick={openManageDoctorsDialog} />
						</Grid>
						<Grid container item sm={6} xs={6} md={6} lg={6} spacing={3}>
							<HomeButton
								title="Acessar documentos"
								description="Documentos necess??rios para autoriza????o da implementa????o de Maximus."
								imageUrl={`${accessDocuments}`}
								onClick={openDocumentsDialog} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<RegisterPatientDialog
				openDialog={patientDialog}
				onClose={closePatientDialog} />
			<RegisterDeviceDialog
				openDialog={deviceDialog}
				onClose={closeDeviceDialog} />
			<DocumentsDialog
				openDialog={documentsDialog}
				onClose={closeDocumentsDialog} />
			<ManageDoctors
				openDialog={manageDoctorDialog}
				onClose={closeManageDoctorsDialog} />
		</>
	);
}