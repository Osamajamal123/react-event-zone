import "../pageone/style.css";
import Json from "../../record.json";
import { useEffect, useState } from "react";

const Pageone1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Json);
  }, []);
  return (
    <div>
      <div className="pageone">
       
          <p>Click me</p>
        
      </div>
      <h2>HTML Table</h2>
<div className="input">
</div>

      <table>
        <tr>
          <th>id</th>
          <th>image</th>
          <th>name</th>
          <th>gender</th>
        </tr>
        {data?.map((single, index) => (
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
        <p >Click me</p>
      </div>
    </div>
  );
};
export default Pageone1;
