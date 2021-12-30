import { useEffect, useState } from "react";
import "../pagethree/style.css";
import axios from 'axios';

const Pagethree = (props) => {
  let {history}=props
console.log("history",history)
  const [data, setData] = useState([]);
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [username, setUsername]= useState("")
  const [record, setRecord]= useState({})
const [index, setIndex]=useState();

const updateHandler = (event) => {
event.preventDefault();
let duplicate = [...data]
duplicate[index]=record;
setData(duplicate);
console.log(duplicate)
}
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      // .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data);
      })
      .catch(error=>{
          console.log(error) 
      })
  }, []);

  console.log("data", data);
  return <div>
      <table>
          <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
          </tr>
        {data?.map((single,index)=>(
              <tr key={index}>
            <td>{single.name}</td>
            <td>{single.username}</td>
            <td>{single.email}</td>
           <td onClick={()=>{
             setRecord(single);
             setIndex(index);
           }}>Edit</td>
          </tr>
          ))  }
      </table>

      <form className="form" onSubmit={(event)=>updateHandler(event)}>
        <input placeholder="Enter your name" onChange={(event)=>{
          let duplicate={... record}
          duplicate.name=event.target.value;
          setRecord(duplicate);
        }}
        value={record?.name}/>

        <input placeholder="Enter your username" onChange={(event)=>{
          let duplicate={... record}
          duplicate.username=event.target.value;
          setRecord(duplicate);
        }}
        value={record?.username}/>

        <input placeholder="Enter your email" onChange={(event)=>{
          let duplicate={... record}
          duplicate.email=event.target.value;
          setRecord(duplicate);
        }}
        value={record?.email}/>

        <button className="button" type={"submit"}>Submit</button>
      </form>
    
  </div>;
};
export default Pagethree;
