import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import * as doctorActions from '../../store/doctor/doctorActions';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';

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
  const { handleSubmit, errors } = useForm<FormData>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const mapServerErrors = (serverErrors: Array<string>) => {
    serverErrors.map(error => <Alert severity="error" variant="filled">{error}</Alert>)
  };
  
  const mapInputErrors = (inputErrorMessage: string | undefined) => {
    <Alert severity="error" variant="filled">{inputErrorMessage}</Alert>
  };
    
  const onButtonClick = handleSubmit( async(formData) => {
    setSubmitting(true);
    setServerErrors([]);
    const response = await fetch(`/doctor/login/${loginUsername}?${loginPassword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
      "Access-Control-Allow-Methods": 'GET',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization'
    },
    // body: JSON.stringify({
    //   doctorEmail: loginUsername,
    //   password: loginPassword
    // })
  });
  doctorActions.loadDoctor(response);
  setSubmitting(false);
  });

  return (
    <div>
      <div className={classes.margin}>
        {serverErrors ? mapServerErrors(serverErrors) : null }
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="E-mail"
            onChange={(e) => setLoginUsername(e.target.value)}
            fullWidth />
        </Grid>
        {errors.doctorEmail ? mapInputErrors(errors.doctorEmail.message) : null}
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="Senha"
            onChange={(e) => setLoginPassword(e.target.value)}
            fullWidth />
        </Grid>
        {errors.password ? mapInputErrors(errors.password.message) : null}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar meu usuário e senha"
        />
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
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu sua senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}




