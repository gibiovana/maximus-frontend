import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import HomeStyles from '../Home/HomeStyles.jss';
import logo from '../../assets/logo.png';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DescriptionIcon from '@material-ui/icons/Description';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HeightIcon from '@material-ui/icons/Height';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import * as patientActions from '../../store/patient/patientActions';
import { Patient } from '../../integration/BackendInterfaces';
import { useParams } from 'react-router-dom';
import { Store } from '../../store/store';
import { Dispatch } from 'react';
import { connect } from 'react-redux';

interface PropsFromDispatch {
  loadPatient: (patientId: any | null) => void;
}

interface PropsFromState {
  patient: Patient | null;
}

interface RouteParams {
  id: string;
}

export const PatientDetails = (props: PropsFromDispatch & PropsFromState) => {
  const { patient, loadPatient } = props;
  let { id } = useParams<RouteParams>();
  const classes = HomeStyles();

  useEffect(() => {
    loadPatient(+id)
  }, [id, loadPatient]);

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
      <div className={classes.profile}>
          <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
            <Avatar style={{margin: '10px', width: '80px', height: '80px'}} />
            <div>
              <Typography variant="h5" component="h4" className={classes.profileIcons} >
                {patient?.name}
              </Typography>
              <Typography component="p">
                {patient?.prontuary}
              </Typography>
            </div>
            <div style={{position: 'absolute', right: 30}}>
              <Button className={classes.diagnosisButton} variant="contained" startIcon={<AddIcon />}>
                Novo diagnóstico
              </Button>
            </div>
          </div>
          <Divider />
          <Typography variant="h5" component="h3" style={{margin: '20px'}}>
            Informações gerais
          </Typography>
          <Divider style={{margin: '0 20px'}} />
          <Grid container spacing={2}>
            <Grid item xs>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon className={classes.profileIcons} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Prontuário"
                    secondary={patient?.prontuary}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AnnouncementIcon className={classes.profileIcons} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Condição patológica"
                    secondary={patient?.pathologicalCondition}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CalendarTodayIcon className={classes.profileIcons} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Data de nascimento"
                    secondary={patient?.birthdate}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIphoneIcon className={classes.profileIcons}  />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dispositivo"
                    secondary={ patient?.device ? `${patient?.device?.deviceId} - ${patient?.device?.model}` : 'Ainda não foi atribuído um dispositivo a este paciente.'}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HeightIcon className={classes.profileIcons} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Altura"
                    secondary={patient?.patientHeight}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon className={classes.profileIcons}  />
                  </ListItemIcon>
                  <ListItemText
                    primary="Peso"
                    secondary={patient?.patientWeight}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AlternateEmailIcon className={classes.profileIcons}  />
                  </ListItemIcon>
                  <ListItemText
                    primary="Username"
                    secondary={patient?.username}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountBalanceIcon className={classes.profileIcons}  />
                  </ListItemIcon>
                  <ListItemText
                    primary="Hospital"
                    secondary={patient?.institution ? patient?.institution?.institutionName : 'Este paciente ainda não foi atribuído a uma Instituição de Saúde'}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Typography variant="h5" component="h2" style={{margin: '20px'}}>
            Diagnósticos recentes
          </Typography>
          <Divider style={{margin: '0 20px'}} />

      </div>
    </>
  );
}

const mapStateToProps = (state: Store): PropsFromState => {
  return {
    patient: state.patient.patientData
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadPatient: (id: number) => dispatch(patientActions.loadPatientById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);