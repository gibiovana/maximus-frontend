import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { getToken, isAuthenticated, login } from "../../api/auth";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import * as doctorActions from '../../store/doctor/doctorActions';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import WrongCredentialsDialog from './WrongCredentialsDialog';

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
	doctorEmail: string,
	password: string
}

export default function Login() {
	const classes = useStyles();
	let history = useHistory();
	const { register, handleSubmit } = useForm<FormData>();
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	}

	const onButtonClick = handleSubmit(async (formData) => {
		setSubmitting(true);

		const response = await fetch(`/doctor/login/${loginUsername}&${loginPassword}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'GET',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			}
		});
		doctorActions.loadDoctor(response);
		setSubmitting(false);
		if (response.ok) {
			login(getToken());
			history.push('/patients');
		} else {
			handleOpen();
		}
	});

	return (
		<div>
			<div className={classes.margin}>
				<Grid>
					<TextField
						id="input-with-icon-grid"
						label="E-mail"
						type="email"
						inputRef={register({
							required: "Campo obrigat??rio"
						})}
						onChange={(e) => setLoginUsername(e.target.value)}
						fullWidth />
				</Grid>
			</div>
			<div className={classes.margin}>
				<Grid>
					<TextField
						id="input-with-icon-grid"
						label="Senha"
						type="password"
						inputRef={register({
							required: "Campo obrigat??rio"
						})}
						onChange={(e) => setLoginPassword(e.target.value)}
						fullWidth />
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					disabled={submitting}
					onClick={onButtonClick}
					className={classes.submit}>
					Entrar
        </Button>
				<Grid container>
					<Grid item>
						<Link href="/register" variant="body2">
							{"N??o tem uma conta? Cadastre-se"}
						</Link>
					</Grid>
				</Grid>
			</div>
			<WrongCredentialsDialog
				openDialog={open}
				onClose={handleClose} />
		</div>
	)
}