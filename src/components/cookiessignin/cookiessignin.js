import { withRouter } from "react-router";
import { useState } from "react/cjs/react.development";
import Cookies from "react-cookies";
import "../cookiessignin/style.css";
import { useEffect } from "react";

const Cookiessignin = (props) => {
  let { history } = props;
  const [cookies, setCookies] = useState({
    username: "",
    password: "",
  });
  const [cookiesvalidation, setCookiesvalidation] = useState({
    username: false,
    password: false,
  });
useEffect(()=>{
   let signIn= Cookies.load("userName", cookies)
   if(signIn){
       history.push("/ecommerce")
   }
   console.log("signin", signIn);
},[])
  const cookiesHandler = (event) => {
    event.preventDefault();
    //  let cookiesstrg=JSON.stringify(cookies)
    let duplicate = { ...cookiesvalidation };
    if (!cookies.username || !cookies.password) {
      if (!cookies.username) {
        duplicate.username = true;
        setCookiesvalidation(duplicate);
      }
      if (!cookies.password) {
        duplicate.password = true;
        setCookiesvalidation(duplicate);
      }
    } else {
      Cookies.save("userName", cookies , {path: '/', expires: new Date(Date.now()+212592000)}) ;
      history.push("/ecommerce");
    }
  };
  console.log("test", cookies);
  return (
    <div>
      <div className="cookiesback">
        <div className="cookiesdata">
          <form
            className="datacookies"
            onSubmit={(event) => cookiesHandler(event)}
          >
            <div className="flexcookies">
              <label>Username:</label>
              <input
                onChange={(event) => {
                  let cookiesState = { ...cookies };
                  cookiesState.username = event.target.value;
                  setCookies(cookiesState);
                  let duplicatevalid = { ...cookiesvalidation };
                  duplicatevalid.username = false;
                  setCookiesvalidation(duplicatevalid);
                }}
              />
              {cookiesvalidation.username && (
                <p className="para">enter your username</p>
              )}
            </div>
            <div className="flexcookies">
              <label>password:</label>
              <input
                onChange={(event) => {
                  let cookiesState = { ...cookies };
                  cookiesState.password = event.target.value;
                  setCookies(cookiesState);
                  let duplicatevalid = { ...cookiesvalidation };
                  duplicatevalid.password = false;
                  setCookiesvalidation(duplicatevalid);
                }}
              />
              {cookiesvalidation.password && (
                <p className="para">enter your password</p>
              )}
            </div>
            <div className="buttoncenter">
              <button type={"submit"}>Signin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Cookiessignin);
