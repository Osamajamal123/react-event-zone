import { useState } from "react/cjs/react.development";
import "../formvalidation/style.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formvalidate, setFormvalidate] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [formlength, setFormlength] = useState({
    namelength: false,
    emaillength: false,
    passwordlength: false,
    confirmPasswordlength: false,
  });

  const formvalidateHandler = (e) => {
    e.preventDefault();
    let duplicate = { ...formvalidate };
let duplength ={...formlength}
let filter =(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!form.name || form?.email || form?.password || form?.confirmPassword) {
      if (!form.name) {
        duplicate.name = true;
        setFormvalidate(duplicate);
      }
      if (!form.email && filter.test(form.email.value)) {
        duplicate.email = true;
        setFormvalidate(duplicate);
        duplength.emaillength = false;
        setFormlength(duplength);
      }else{
        duplength.emaillength = true;
        setFormlength(duplength);    
      }
      if (!form.password ) {
        duplicate.password = true;
        setFormvalidate(duplicate);
      }
     
      if (!form.confirmPassword) {
        duplicate.confirmPassword = true;
        setFormvalidate(duplicate);
      }
    }
  };
  console.log("test", formvalidate);
  return (
    <div>
      <div className="formvalidate">
        <form className="formcenter" onSubmit={(e) => formvalidateHandler(e)}>
          <div>
            Name:{" "}
            <input
              onChange={(event) => {
                let duplicatelength = { ...formlength };
                if (event.target.value.length < 5) {
                  duplicatelength.namelength = true;
                  setFormlength(duplicatelength);
                } else {
                  let duplicate = { ...form };
                  duplicate.name = event.target.value;
                  setForm(duplicate);
                  duplicatelength.namelength = false;
                  setFormlength(duplicatelength);
                }
              }}
            />
            {formvalidate.name && (
              <p className="errorsize">"name is required"</p>
            )}
            {formlength.namelength && (
              <p className="errorsize">"name is greater then 5"</p>
            )}
          </div>

          <div>
            Email:{" "}
            <input
              onChange={(event) => {
               
                let duplicatelength = { ...formlength };
             
               
                    let duplicate = { ...form };
                    duplicate.email = event.target.value;
                    setForm(duplicate);
                    duplicatelength.emaillength = false;
                    setFormlength(duplicatelength);
                   
                
                
                let duplicatetwo = { ...formvalidate };
                    duplicatetwo.email = false;
                    setFormvalidate(duplicatetwo);
              }}
            />
            {formvalidate.email && (
              <p className="errorsize">"Email is required"</p>
            )}
            {formlength.emaillength && (
              <p className="errorsize">"correct Email is required"</p>
            )}
          </div>

          <div>
            Password:{" "}
            <input
              onChange={(event) => {
                  
                let duplicate = { ...form };
                duplicate.password = event.target.value;
                setForm(duplicate);
                let duplicatetwo = { ...formvalidate };
                duplicatetwo.password = false;
                setFormvalidate(duplicatetwo);
              }}
            />
            {formvalidate.password && (
              <p className="errorsize">"password is required"</p>
            )}
            {formlength.passwordlength && (
              <p className="errorsize">"password is too short"</p>
            )}
          </div>

          <div>
            Confirm Password:{" "}
            <input
              onChange={(event) => {
                let duplicate = { ...form };
                duplicate.confirmPassword = event.target.value;
                setForm(duplicate);
                let duplicatetwo = { ...formvalidate };
                duplicatetwo.confirmPassword = false;
                setFormvalidate(duplicatetwo);
              }}
            />
            {formvalidate.confirmPassword && (
              <p className="errorsize">"confirm password is required"</p>
            )}
          </div>

          <button type={"submit"}>Signin</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
