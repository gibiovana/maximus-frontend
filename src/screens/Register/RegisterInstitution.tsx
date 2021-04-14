import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as institutionActions from '../../store/institution/institutionActions';

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
  institutionName: string,
  adminEmail: string,
  cnes: string,
  password: string
}

export default function RegisterInstitution() {
  const classes = useStyles();
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onButtonClick = handleSubmit( async(formData) => {
    setSubmitting(true);

    const response = await fetch("/institution/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":  'http://127.0.0.1:3000',
        "Access-Control-Allow-Methods": 'POST',
        "Access-Control-Allow-Headers": 'Content-Type, Authorization'
      },
      body: JSON.stringify({
        institutionName: formData.institutionName,
        cnes: formData.cnes,
        adminEmail: formData.adminEmail,
        password: formData.password
      })
    });
    
    institutionActions.createInstitution(response)
    const data = await response.json();
    
    if(!data.errors){
      history.push('/login');
    }

    setSubmitting(false);
  });

  return (
    <div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            name="institutionName"
            id="institutionName"
            label="Nome da Instituição"
            inputRef={register({
              required: "Campo obrigatório"
            })}
            fullWidth />
            {errors.institutionName ? <div>{errors.institutionName.message}</div> : null}
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            name="cnes"
            id="cnes"
            label="Cadastro Nacional de Estabelecimento de Saúde (CNES)"
            inputRef={register({
              required: "Campo obrigatório"
            })}
            fullWidth />
            {errors.cnes ? <div>{errors.cnes.message}</div> : null}
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            name="adminEmail"
            id="adminEmail"
            type="email"
            label="E-mail de administrador"
            inputRef={register({
              required: "Campo obrigatório"
            })}
            fullWidth />
            {errors.adminEmail ? <div>{errors.adminEmail.message}</div> : null}
        </Grid>
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
            {errors.password ? <div>{errors.password.message}</div> : null}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={submitting}
          onClick={onButtonClick}
          className={classes.submit}>
          Cadastrar
        </Button>
        <Grid item>
          <Link href="/login" variant="body2">
              {"Já possui uma conta? Efetue login"}
          </Link>
        </Grid>
      </div>
    </div>
  );
}