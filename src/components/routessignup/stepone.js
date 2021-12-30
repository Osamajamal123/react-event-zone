import { withRouter } from "react-router";
import "./style.css";

const Stepone = (props) => {
  let { history } = props;
  return (
    <div>
      <div className="signupcenter">
        <div className="signup">
          <div className="dataflex">
            <form>
              <div className="divfelx">
                <label>username</label>
                <input />
              </div>
              <div className="divfelx">
                <label>email</label>
                <input />
              </div>
              <div className="center">
                <button onClick={() => history.push("/signup?key=2")}>
                  Step 2
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Stepone);
