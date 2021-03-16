import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

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
            label="E-mail"
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar meu usuário e senha"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu sua senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}