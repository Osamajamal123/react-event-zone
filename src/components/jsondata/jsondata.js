import "../jsondata/style.css";
import Crud from "../../table.json";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
const Jsondata = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [index, setIndex] = useState([]);
  const [filter, setFilter] = useState([]);
  const [age, setAge] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setData(Crud);
    setFilter(Crud);
  }, []);
  const updateHandler = (event) => {
    console.log("data", event);
    event.preventDefault();
    data[index] = record;
    setData(data);
    console.log("update", data);
  };
  const searchHandler = (event) => {
    console.log("search", event);
    let datafilter = filter.filter(
      (single) => single.name.toLowerCase().indexOf(event.toLowerCase()) !== -1
    );
    console.log("data", datafilter);
    setData(datafilter);
    // console.log("result",setFilter)
  };
  const deleteHandler = (id) => {
    let removeFilter = data.filter((e) => e._id !== id);
    setData(removeFilter);
  };
  const addHandler = (event) => {
    event.preventDefault();
    let addition = {
      id: index + 1,
      age: age,
      name: name,
      gender: gender,
      email: email,
    };
    setData([...data, addition]);
  };
  return (
    <div>
      <form onSubmit={(event) => addHandler(event)}>
        <input
          placeholder="enter your age"
          style={{ width: "50%", padding: "9px" }}
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          placeholder="enter your name"
          style={{ width: "50%", padding: "9px" }}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="enter your gender"
          style={{ width: "50%", padding: "9px" }}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          placeholder="enter your email"
          style={{ width: "50%", padding: "9px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type={"submit"}>submit</button>
      </form>
      <input
        placeholder="Search"
        onChange={(event) => searchHandler(event.target.value)}
      />
      <table>
        <tr>
          <th>ID</th>
          <th>Age</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
        {data?.map((single, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{single.age}</td>
            <td>{single.name}</td>
            <td>{single.gender}</td>
            <td>{single.email}</td>
            <td
              onClick={() => {
                setRecord(single);
                setIndex(index);
              }}
            >
              edit
            </td>
            <td
              onClick={() => {
                deleteHandler(single._id);
              }}
            >
              Delete
            </td>
          </tr>
        ))}
        ;
      </table>
      <div className="center">
        <form onSubmit={(event) => updateHandler(event)}>
          <input
            placeholder="enter your age"
            style={{ width: "50%", padding: "9px" }}
            value={record?.age}
            onChange={(event) => {
              let duplicate = { ...record };
              duplicate.age = event.target.value;
              setRecord(duplicate);
            }}
          />
          <input
            placeholder="enter your name"
            style={{ width: "50%", padding: "9px" }}
            value={record?.name}
            onChange={(event) => {
              let duplicate = { ...record };
              duplicate.name = event.target.value;
              setRecord(duplicate);
            }}
          />

          <input
            placeholder="enter your gender"
            style={{ width: "50%", padding: "9px" }}
            value={record?.gender}
            onChange={(event) => {
              let duplicate = { ...record };
              duplicate.gender = event.target.value;
              setRecord(duplicate);
            }}
          />
          <input
            placeholder="enter your email"
            style={{ width: "50%", padding: "9px" }}
            value={record?.email}
            onChange={(event) => {
              let duplicate = { ...record };
              duplicate.email = event.target.value;
              setRecord(duplicate);
            }}
          />
          <button type={"submit"}>submit</button>
        </form>
      </div>
    </div>
  );
};
export default Jsondata;
