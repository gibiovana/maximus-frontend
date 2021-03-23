import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => doctorActions.createDoctor(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.margin}>
          <Grid>
            <TextField
              id="input-with-icon-grid"
              label="Nome completo"
              name="FullName"
              inputRef={register}
              fullWidth />
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              id="input-with-icon-grid"
              label="CRM"
              name="CRM"
              inputRef={register}
              fullWidth />
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              id="input-with-icon-grid"
              label="E-mail institucional"
              name="Email"
              inputRef={register}
              fullWidth />
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid>
            <TextField
              id="input-with-icon-grid"
              label="Senha"
              name="Password"
              type="password"
              inputRef={register}
              fullWidth />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Cadastrar
          </Button>
          <Grid item>
            <Link href="/" variant="body2">
              {"Já possui uma conta? Efetue login"}
            </Link>
          </Grid>
        </div>
      </form>
    </div>
  );
}