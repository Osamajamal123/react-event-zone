import Pageone from "../../components/routessignup/stepone";
import Pagetwo from "../../components/routessignup/steptwo";
import Pagethree from "../../components/routessignup/stepthree";
import { withRouter } from "react-router";

const Signuprouting = (props) => {
  let { history, match } = props;
  let key = history?.location.search;
  console.log("history", key);
  console.log("search", history);
  const SectionHandler = (search) => {
    switch (search) {
      case "?key=1":
        return <Pageone />;
      case "?key=2":
        return <Pagetwo />;
      case "?key=3":
        return <Pagethree />;
      default:
        return <Pageone />;
    }
  };

  return <div>{SectionHandler(key)}</div>;
};
export default withRouter(Signuprouting);
