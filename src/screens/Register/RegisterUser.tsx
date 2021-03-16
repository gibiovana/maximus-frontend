import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

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

  return (
    <div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="Nome completo"
            fullWidth />
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="CRM"
            fullWidth />
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="E-mail institucional"
            fullWidth />
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <TextField
            id="input-with-icon-grid"
            label="Senha"
            fullWidth />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Cadastrar
        </Button>
        <Grid item>
          <Link href="/" variant="body2">
            {"Já possui uma conta? Efetue login"}
          </Link>
        </Grid>
      </div>
    </div>
  );
}