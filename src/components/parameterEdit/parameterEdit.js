import "./style.css";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const ParameterEdit = (props) => {
  const [paradata, setParadata] = useState([]);
  console.log("paradata", paradata);
  let { history, match } = props;
  let matchdata = match?.params?.id;

  console.log("match", match);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + matchdata)
      .then((response) => response.json())
      .then((json) => setParadata(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="formcenter">
      <form className="center" onSubmit={(event)=>history.push("/"+paradata)}>
        <input value={paradata?.id} onChange={(event)=>{
            let duplicate={...paradata};
              duplicate.id=event.target.value;
              setParadata(duplicate)
        }} />
        <input value={paradata?.name} onChange={(event)=>{
            let duplicate={...paradata};
              duplicate.name=event.target.value;
              setParadata(duplicate)
        }}/>
        <input value={paradata?.username} onChange={(event)=>{
            let duplicate={...paradata};
              duplicate.username=event.target.value;
              setParadata(duplicate)
        }} />
        <input value={paradata?.email} onChange={(event)=>{
            let duplicate={...paradata};
              duplicate.email=event.target.value;
              setParadata(duplicate)
        }}/>
        <button type={"submit"}>update</button>
      </form>
    </div>
  );
};
export default ParameterEdit;
