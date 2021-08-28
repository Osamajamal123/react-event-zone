import "../pagetwo/style.css"
import Jsontable from "../../table.json"
import { useEffect, useState } from "react"

const Pagetwo2=()=>{
    const [data, setData]=useState([]);
    useEffect(()=>{
setData(Jsontable);
    },[])
    return(
        <div>
<div className="pagetwo">
<p>Name</p>
<p>Class</p>
<p>Address</p>
<p>Category</p>
</div>
<h2>HTML Table</h2>

<table>
  <tr>
    <th>ID</th>
    <th>Picture</th>
    <th>Age</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Email</th>
  </tr>
  {data?.map((single,index)=>(
  <tr key={index}>
    <td>{index +1}</td>
    <td><img src={single.picture} alt="git "/></td>
    <td>{single.age}</td>
    <td>{single.name}</td>
    <td>{single.gender}</td>
    <td>{single.email}</td>

  </tr>
 )) }
</table>

        </div>
    )
}
export default Pagetwo2;