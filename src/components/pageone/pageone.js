import "../pageone/style.css";
import { Link } from "react-router-dom";
import Json from "../../record.json";
import { useEffect, useState } from "react";

const Pageone1 = () => {
  const [search, setSearch]=useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Json);
  }, []);
function clickme(){
  alert("Hello world!")
}
  return (
    <div>
      <div className="pageone">
        <Link to="">
          <p>Click me</p>
        </Link>
      </div>
      <h2>HTML Table</h2>
<div className="input">
  <input placeholder="Search" onChange={(event)=>{
setSearch(event.target.value);
  }}/>
</div>

      <table>
        <tr>
          <th>id</th>
          <th>image</th>
          <th>name</th>
          <th>gender</th>
        </tr>
        {data?.filter((single)=>{
          if(search == ""){
            return single
          }
          else if(single.tolowercase().include(search.tolowercase())) {
            return single
          }
        }).map((single, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img src={single.picture} alt="" />
            </td>
            <td>{single.name}</td>
            <td>{single.gender}</td>
          </tr>
        ))}
      </table>
      <div className="onclickbtn">
        <p onClick={clickme} >Click me</p>
      </div>
    </div>
  );
};
export default Pageone1;
