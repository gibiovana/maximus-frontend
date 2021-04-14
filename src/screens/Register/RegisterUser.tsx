import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import * as doctorActions from '../../store/doctor/doctorActions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		margin: {
			margin: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}),
);

interface FormData {
	doctorName: string,
	doctorEmail: string,
	doctorCRM: string,
	password: string
}

export default function Register() {
	const classes = useStyles();
	let history = useHistory();
	const { register, handleSubmit, errors } = useForm<FormData>();
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [serverErrors, setServerErrors] = useState<Array<string>>([]);

	const mapServerErrors = (serverErrors: Array<string>) => {
		serverErrors.map(error => <Alert severity="error" variant="filled">{error}</Alert>)
	};

	const onButtonClick = handleSubmit(async (formData) => {
		setSubmitting(true);
		setServerErrors([]);

		const response = await fetch("/doctor/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'POST',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			},
			body: JSON.stringify({
				doctorName: formData.doctorName,
				doctorCRM: formData.doctorCRM,
				doctorEmail: formData.doctorEmail,
				password: formData.password
			})
		});

		doctorActions.createDoctor(response)
		const data = await response.json();

		if (data.errors) {
			setServerErrors(data.errors);
		} else {
			history.push('/login');
		}

		setSubmitting(false);
	});

	return (
		<form>
			{serverErrors ? mapServerErrors(serverErrors) : null}
			<div className={classes.margin}>
				<Grid>
					<TextField
						name="doctorName"
						id="doctorName"
						label="Nome completo"
						inputRef={register({
							required: "Campo obrigatório"
						})}
						fullWidth />
				</Grid>
				{errors.doctorName ? <div>{errors.doctorName.message}</div> : null}
			</div>
			<div className={classes.margin}>
				<Grid>
					<TextField
						name="doctorCRM"
						id="doctorCRM"
						label="CRM"
						inputRef={register({
							required: "Campo obrigatório"
						})}
						fullWidth />
				</Grid>
				{errors.doctorCRM ? <div>{errors.doctorCRM.message}</div> : null}
			</div>
			<div className={classes.margin}>
				<Grid>
					<TextField
						name="doctorEmail"
						id="doctorEmail"
						type="email"
						label="E-mail institucional"
						inputRef={register({
							required: "Campo obrigatório"
						})}
						fullWidth />
				</Grid>
				{errors.doctorEmail ? <div>{errors.doctorEmail.message}</div> : null}
			</div>
			<div className={classes.margin}>
				<Grid>
					<TextField
						name="password"
						id="password"
						label="Senha"
						type="password"
						inputRef={register({
							required: "Campo obrigatório"
						})}
						fullWidth />
				</Grid>
				{errors.password ? <div>{errors.password.message}</div> : null}
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					disabled={submitting}
					onClick={onButtonClick}>
					Cadastrar
          </Button>
				<Grid item>
					<Link href="/login" variant="body2">
						{"Já possui uma conta? Efetue login"}
					</Link>
				</Grid>
			</div>
		</form>
	);
}