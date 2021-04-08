import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import doctorImage from '../../assets/Radiography-amico.png';
import logo from '../../assets/logo.png';
import registerPatient from '../../assets/Children-pana.png';
import registerDevice from '../../assets/Mobile apps-amico.png';
import deviceToPatient from '../../assets/Devices-rafiki.png';
import accessDocuments from '../../assets/Documents-rafiki.png';
import child from '../../assets/Child-pana.png';
import doctors from '../../assets/Doctors-pana.png';
import "@fontsource/comfortaa/300.css"
import HomeButton from './HomeButton';
import HomeStyles from './HomeStyles.jss';

export default function Home() {
    const classes = HomeStyles();

    return (
        <>
            <Grid container className={classes.header}>
                <Grid item xs className={classes.header}>
                    <img className={classes.avatar} src={logo} />
                    <Typography component="h1" variant="h5" className={classes.title}>
                        MAXIMUS
                </Typography>
                </Grid>
                <Grid item xs className={classes.actions}>
                    <Link href="/login" variant="body2" component="h1" className={classes.title} style={{ marginRight: '1.5rem', marginTop: '1.2rem' }}>
                        {"Sair"}
                    </Link>
                </Grid>
            </Grid>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} square className={classes.login}>
                    <div className={classes.paper}>
                        <Typography component="h4" variant="h5" className={classes.title}>
                            Bem-vindo à página inicial de Maximus!
                    </Typography>
                        <Typography component="h5" variant="h6" className={classes.subtitle}>
                            Escolha uma das funcionalidades
                    </Typography>
                        <img src={doctorImage} className={classes.doctor} />
                    </div>
                </Grid>
                <Grid item xs={false} sm={4} md={7} className={classes.functions}>
                    <Grid container spacing={1}>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Cadastrar paciente"
                            description="Incluir paciente à Maximus."
                            imageUrl={`${registerPatient}`}
                            onClick={null} />
                        </Grid>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Cadastrar dispositivo"
                            description="Adicionar novo item à lista de dispositivos disponíveis."
                            imageUrl={`${registerDevice}`}
                            onClick={null} />
                        </Grid>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Vincular paciente ao dispositivo"
                            description="Associar o dispositivo a ser utilizado pelo paciente."
                            imageUrl={`${deviceToPatient}`}
                            onClick={null} />
                        </Grid>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Gerenciar médicos"
                            description="Analisar os profissionais de saúde vinculados à Instituição."
                            imageUrl={`${doctors}`}
                            onClick={null} />
                        </Grid>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Gerenciar pacientes"
                            description="Analisar os pacientes vinculados à Instituição."
                            imageUrl={`${child}`}
                            onClick={null} />
                        </Grid>
                        <Grid container item xs={4} spacing={3}>
                            <HomeButton
                            title="Acessar documentos"
                            description="Documentos necessários para autorização da implementação de Maximus."
                            imageUrl={`${accessDocuments}`}
                            onClick={null} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}