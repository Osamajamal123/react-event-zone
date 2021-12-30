import "../pagetwo/style.css";
import Jsontable from "../../table.json";
import { useEffect, useState } from "react";

const Pagetwo2 = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [record, setRecord] = useState({});
  const [index, setIndex] = useState([]);
  console.log("record", record);
  useEffect(() => {
    setData(Jsontable);
    setfilter(Jsontable);
  }, []);
  const selectHandler = (value) => {
    console.log(value);
    if (value === "all") {
      setData(Jsontable);
    } else {
      const allData = filter.filter((single) => single.gender === value);
      setData(allData);
    }
  };
  const dataAddition = (event) => {
    event.preventDefault();
    let firstrecord = {
      _id: "61272cf49354a52b604125ec",
      picture: "http://placehold.it/32x32",
      age: 34,
      name: name,
      gender: gender,
      email: email,
    };
    setData([...data, firstrecord]);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    // let duplicate = [...data];
    data[index] = record;
    setData(data);
  };

  console.log("record", record);
  console.log("index", index);
  return (
    <div>
      <div>
        <div className="pagetwo">
          <select onChange={(event) => selectHandler(event.target.value)}>
            <option value="all">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <form className="form" onSubmit={(event) => dataAddition(event)}>
          <input
            placeholder="enter name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="enter gender"
            onChange={(event) => setGender(event.target.value)}
          />
          <input
            placeholder="enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="h1" type={"submit"}>
            Click
          </button>
        </form>
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
        {data?.map((single, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img src={single.picture} alt="" />
            </td>
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
              Edit
            </td>
          </tr>
        ))}
      </table>
      <form className="form" onSubmit={(event) => updateHandler(event)}>
        <input
          placeholder="enter name"
          onChange={(event) => {
            let duplicate = { ...record };
            duplicate.name = event.target.value;
            setRecord(duplicate);
          }}
          value={record?.name}
        />
        <input
          placeholder="enter gender"
          onChange={(event) => {
            let duplicate = { ...record };
            duplicate.gender = event.target.value;
            setRecord(duplicate);
          }}
          value={record?.gender}
        />
        <input
          placeholder="enter email"
          onChange={(event) => {
            let duplicate = { ...record };
            duplicate.email = event.target.value;
            setRecord(duplicate);
          }}
          value={record?.email}
        />
        <button className="h1" type={"submit"}>
          Click
        </button>
      </form>
    </div>
  );
};
export default Pagetwo2;
