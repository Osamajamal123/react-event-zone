import { withRouter } from "react-router";
import { useState } from "react/cjs/react.development";
import "../login/style.css";

const LogIn = (props) => {
    let {history}=props;
  const [credential, setCredential] = useState({
    Username: "",
    Password: "",
  });
  const LocalStorage=()=>{
   const myJSON = JSON.stringify(credential);
   localStorage.setItem("user", myJSON);
   history.push("/")
  }

  console.log("username:", credential.Username);
  console.log("password:", credential.Password);
  return (
    <div>
      <div className="background">
        <form className="card" onSubmit={(event)=>LocalStorage(event)}>
          <div className="input">
            UserName:
            <input required
              onChange={(event) => {
                let duplicate = { ...credential };
                duplicate.Username = event.target.value;
                setCredential(duplicate);
              }}
              
            />
          </div>
          <div className="input">
            Password:
            <input  required
              onChange={(event) => {
                let duplicate = { ...credential };
                duplicate.Password = event.target.value;
                setCredential(duplicate);
              }}
             
            />
          </div>
          <button className="input" type={"submit"}>Sign in</button>
        </form>
      </div>
    </div>
  );
};
export default withRouter(LogIn);
