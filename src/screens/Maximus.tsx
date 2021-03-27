import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './Login/SignInPage';
import SignUpPage from './Register/SignUpPage';
import { Dispatch, useEffect } from 'react';
import * as doctorActions from '../store/doctor/doctorActions';
import { connect } from 'react-redux';
import { LOAD_STATUS } from '../store/types';

interface PropsFromActions {
  loadDoctors: () => LOAD_STATUS | void;
}

const Maximus = (props: PropsFromActions) => {
  const { loadDoctors } = props;

  useEffect(() => { loadDoctors(); }, [loadDoctors]);

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={SignUpPage} />
        <Route path="/" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadDoctors: () => dispatch(doctorActions.loadDoctors()),
  };
};

export default connect(null, mapDispatchToProps)(Maximus);