import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './screens/Login/SignInPage';
import SignUpPage from './screens/Register/SignUpPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={SignUpPage} />
        <Route path="/" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
