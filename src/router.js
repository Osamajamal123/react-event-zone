import Pageone from "./container/pageone1";
import Pagetwo from "./container/pagetwo2";
import Pagethree3 from "./components/pagethree/pagethree";
import Jsondata from "./components/jsondata/jsondata";
import Cardsection from "./components/cardSection/cardsection";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Signin from "./components/login/login";
import Formvalidation from "./components/formvalidation/formvalidation";
import CookiesSignin from "./components/cookiessignin/cookiessignin";
import Localstoragrecards from "./components/localstoragecards/localstoragecards";
import Parameter from "./components/parameter/parameter";
import ParameterEdit from "./components/parameterEdit/parameterEdit";
import routing1 from "./container/routing/routing";
import Paginationapis from "./components/paginationapis/paginationapis"
import Sorting from "./components/sorting/sorting"
import SplitString from "./components/splitString/splitString"
import HouseTestingApi from "./components/houseAPITesting/houseApiTesting"
import CompareArray from "./components/compareArray/compareArray"
import SwitchStatement from "./components/switchStatement/switchStatement"
import Tictactoe from "./components/ticTacToe/ticTacToe"
import { Route, Switch, withRouter } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      {/* <Route path="/" component={Pagetwo}/> */}
      {/* <Route path="/" component={Pageone}/> */}
      {/* <Jsondata/> */}
      {/* <Cardsection/> */}

      {/* <Route path="/signin" component={Signin}/>
           
         {/* <Formvalidation/> */}
      <Route path="/switch-statement" component={SwitchStatement} />
      <Route path="/tictactoe" component={Tictactoe} />
      <Route path="/ecommerce" component={Ecommerce} />
      <Route path="/compare-array" component={CompareArray} />
      <Route path="/split-string" component={SplitString} />
      <Route path="/house-api" component={HouseTestingApi} />
      <Route path="/sorting" component={Sorting} />
      <Route path="/ecommerce-new" component={Localstoragrecards} />
      <Route path="/signup" component={routing1}  /> 
      <Route path="/users" component={Paginationapis}  /> 
      <Route path="/" component={CookiesSignin} exact />
      <Route path="/user-edit/:id" component={ParameterEdit}  />
      {/* <Route path="/" component={Parameter} exact /> */}
      
    </Switch>
  );
};
export default withRouter(App);
