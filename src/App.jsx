import { Route, Switch } from 'react-router-dom/';
import LandingPage from './views/LandingPage';
import Main from './views/Main';

export default function App() {

  return (
    <Switch>

      <Route path="/char">
        <LandingPage />
      </Route>

      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
