import Pageone from "./container/pageone1"
import Pagetwo from "./container/pagetwo2"
import { Route, Switch } from "react-router-dom";

const App =()=>{
    return(
        <Switch>
            <Route path="/pagetwo" component={Pagetwo}/>
            <Route path="/" component={Pageone}/>
        </Switch>
    )
}
export default App;

