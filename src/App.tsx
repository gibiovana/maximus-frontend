import { withRedux } from './decorators/WithRedux';
import { store } from './store/store';
import { compose } from 'redux';
import Maximus from './screens/Maximus';

const App: React.FC = () => {
  return <Maximus/>;
}

const composeApp = compose(withRedux(store))(App);

export default composeApp;
