import './App.css';
import Routespages from "./router"
import { Switch,withRouter } from 'react-router-dom'

function App() {
  return (
  <Switch>
    <Routespages/>
  </Switch>
  );
}

export default withRouter(App);
