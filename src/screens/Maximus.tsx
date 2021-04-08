import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './Login/SignInPage';
import SignUpPage from './Register/SignUpPage';
import { Dispatch, useEffect } from 'react';
import * as doctorActions from '../store/doctor/doctorActions';
import * as institutionActions from '../store/institution/institutionActions';
import { connect } from 'react-redux';
import { LOAD_STATUS } from '../store/types';
import Home from './Home/Home';

interface PropsFromActions {
  loadDoctors: () => LOAD_STATUS | void;
  loadInstitutions: () => LOAD_STATUS | void;
}

const Maximus = (props: PropsFromActions) => {
  const { loadDoctors, loadInstitutions } = props;

  useEffect(() => { 
    loadDoctors();
    loadInstitutions();
  }, [loadDoctors, loadInstitutions]);

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadDoctors: () => dispatch(doctorActions.loadDoctors()),
    loadInstitutions: () => dispatch(institutionActions.loadInstitutions())
  };
};

export default connect(null, mapDispatchToProps)(Maximus);