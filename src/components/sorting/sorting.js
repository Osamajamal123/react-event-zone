import { useState, useEffect } from "react";
import RecordJson from "../../table.json";

const Sorting = () => {
  const [data, setData] = useState([]);
  console.log("data",data)
  useEffect(() => {
    setData(RecordJson);
  }, []);
  const optionHAndler = (value) => {
    if (value === "sort") {
        let parsedata=JSON.parse(data)
      let acsending = parsedata?.sort((a, b) => (a.name - b.name ? 1 : -1));
      console.log("ascending", acsending);
      setData(acsending);
      console.log("sort", data);
    }
  };
  return (
    <div>
      <select onChange={(event) => optionHAndler(event.target.value)}>
        <option value="">Select Sort Option</option>
        <option value="sort">Sort</option>
        <option value="unSort">UnSort</option>
      </select>
      <table>
        <tr>
          <td>id</td>
          <td>age</td>
          <td>name</td>
          <td>gender</td>
          <td>email</td>
        </tr>
        {data?.map((single, index) => (
          <tr key={index}>
            <td>{single.id}</td>
            <td>{single.age}</td>
            <td>{single.name}</td>
            <td>{single.gender}</td>
            <td>{single.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Sorting;
