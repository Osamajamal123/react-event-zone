import logo from './logo.svg';
import './App.css';
import Pageone from "./components/pageone/pageone";
import Routespages from "./router"
import { Switch } from 'react-router-dom'

function App() {
  return (
  <Switch>
    <Routespages/>
  </Switch>
  );
}

export default App;
