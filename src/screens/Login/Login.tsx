import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="E-mail" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Senha" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid>
          <Grid item>
            <a href="forgot">Esqueceu sua senha?</a>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">Login</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}