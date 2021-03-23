import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import * as doctorActions from '../../store/doctor/doctorActions';

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
  name: string,
  email: string,
  crm: string,
  password: string
}

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);
  
  const mapServerErrors = (serverErrors: Array<string>) => {
    serverErrors.map(error => <Alert severity="error" variant="filled">{error}</Alert>)};

  return (
      <form onSubmit={handleSubmit( async(formData) => {
        setSubmitting(true);
        setServerErrors([]);

        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            crm: formData.crm,
            email: formData.email,
            password: formData.password
          })
        });
        
        doctorActions.createDoctor(response)
        const data = await response.json();
        
        if(data.errors){
          setServerErrors(data.errors);
        }else{
          console.log("Success, redirect to home page");
        }

        setSubmitting(false);
        })}>
        
        {serverErrors ? mapServerErrors(serverErrors) : null }
          
        <div className={classes.margin}>
          <Grid>
            <TextField
              name="name"
              id="name"
              label="Nome completo"
              inputRef={register({
                required: "required"
              })}
              fullWidth />
          </Grid>
          {errors.name ? <div>{errors.name.message}</div> : null}
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              name="crm"
              id="crm"
              label="CRM"
              inputRef={register({
                required: "required"
              })}
              fullWidth />
          </Grid>
          {errors.crm ? <div>{errors.crm.message}</div> : null}
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              name="email"
              id="email"
              label="E-mail institucional"
              inputRef={register({
                required: "required"
              })}
              fullWidth />
          </Grid>
          {errors.email ? <div>{errors.email.message}</div> : null}
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              name="password"
              id="password"
              label="Senha"
              type="password"
              inputRef={register({
                required: "required"
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
            disabled={submitting}>
            Cadastrar
          </Button>
          <Grid item>
            <Link href="/" variant="body2">
              {"Já possui uma conta? Efetue login"}
            </Link>
          </Grid>
        </div>
      </form>
  );
}