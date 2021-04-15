import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import notFound from '../assets/404 Error-pana.png';
import HomeStyles from './Home/HomeStyles.jss';
import logo from '../assets/logo.png';
import Link from '@material-ui/core/Link';

export default function NotFound() {
  const classes = HomeStyles();
  return (
    <>
      <Grid container className={classes.header}>
        <Grid item xs className={classes.header}>
          <Link href="/login">
            <img className={classes.avatar} src={logo} alt="Maximus logo"/>
            </Link>
            <Typography component="h1" variant="h5" className={classes.title}>
              MAXIMUS
            </Typography>
        </Grid>
        <Grid item xs className={classes.actions}>
          <Button href="/login" className={classes.title} style={{ marginRight: '1rem' }}>
            {"Sair"}
          </Button>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'hidden' }}>
        <img src={notFound} alt="Not found" style={{ width: '35%', }} />
        <h3 style={{ fontFamily: 'Comfortaa', font: 'Comfortaa', color: '#6B6B6B' }}>Woops, there's nothing here!</h3>
      </div>
    </>
  );
}