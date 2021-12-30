import { useEffect,useState } from "react";
import { withRouter } from "react-router";
import "./style.css"


const Parameter =(props)=>{
    let {history}=props
    const [data, setData]=useState([])
    useEffect(() => {
      
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response?.json())
          .then((json) => setData(json));
      }, []);
    
    return(
        <div>
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>username</th>
    <th>email</th>
  </tr>
  { data?.length !==0 ? data?.map((single,index)=>(
        <tr key={index}>
        <td>{single.id}</td>
        <td>{single.name}</td>
        <td>{single.username}</td>
        <td>{single.email}</td>
        <td><button onClick={()=>          history.push("/user-edit/"+single.id)}>Edit</button></td>
       
      </tr> 
      ))
      :"No Record"
  }
 
</table>
        </div>
    )
}
export default withRouter(Parameter);