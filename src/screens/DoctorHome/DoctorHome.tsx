import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import doctorImage from '../../assets/Radiography-amico.png';
import logo from '../../assets/logo.png';
import HomeStyles from '../Home/HomeStyles.jss';

import "@fontsource/comfortaa/300.css";
import { Button } from '@material-ui/core';
import PatientList from './PatientList';

export default function Home() {
	const classes = HomeStyles();

	return (
		<>
			<Grid container className={classes.header}>
				<Grid item xs className={classes.header}>
					<img className={classes.avatar} src={logo} alt="Maximus logo"/>
					<Typography component="h1" variant="h5" className={classes.title}>
						MAXIMUS
            </Typography>
				</Grid>
				<Grid item xs className={classes.actions}>
					<Button href="/login" className={classes.title} style={{ marginRight: '1rem'}}>
						{"Sair"}
					</Button>
			</Grid>
			</Grid>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={12} sm={8} md={5} component={Paper} square className={classes.login}>
					<div className={classes.paper}>
						<Typography component="h4" variant="h5" className={classes.title}>
							Bem-vindo à página inicial de Maximus!
                </Typography>
						<Typography component="h5" variant="h6" className={classes.subtitle}>
							Cheque sua lista de pacientes ao lado
            </Typography>
						<img src={doctorImage} className={classes.doctor} alt="Doctor icon"/>
					</div>
				</Grid>
				<Grid item xs={false} sm={4} md={7} className={classes.functions}>
					<PatientList></PatientList>
				</Grid>
			</Grid>
		</>
	);
}