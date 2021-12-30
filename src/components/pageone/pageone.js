// import "../pageone/style.css";
// import Json from "../../record.json";
// import { useEffect, useState } from "react";

// const Pageone1 = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   useEffect(() => {
//     setData(Json);
//     setFilteredData(Json);
//   }, []);
//   const Adrecord=()=>{
//     let nawrecord = {
//       _id: "61272cf49354a52b604125ec",
//     picture: "http://placehold.it/32x32",
//     age: 34,
//     name: "name",
//     gender: "gender",
//     email: "tamraayala@elpro.com"
//     }
//     setData([...data,nawrecord])
//     console.log(Adrecord())
//   }
// const addRecord=()=>{
//   let newRecord = {
//     _id: "61272cf49354a52b604125ec",
//     picture: "http://placehold.it/32x32",
//     age: 34,
//     name: "Osama Jamal",
//     gender: "female",
//     email: "tamraayala@elpro.com"
//   };
//   setData([...data,newRecord])
// }
// const secrecord=()=>{
//   let firstrecord={
//     _id: "61272cf49354a52b604125ec",
//     picture: "http://placehold.it/32x32",
//     age: 34,
//     name: "uzair",
//     gender: "male",
//     email: "tamraayala@elpro.com"
//   }
//   setData([...data,firstrecord])
// }
//   const searchHandler = (value) => {
//     console.log(Json)
//       const searchedData = filteredData.filter(
//         (item) => item.gender.toLowerCase().indexOf(value) !== -1
//       );
//       setData(searchedData);
//       console.log("searchData", searchedData);
//     }
//   };

//   const selectOption = (value) => {
//     if(value==="all"){
//       setData(Json);
//     }
//     else{
//       const searchedData = filteredData.filter(
//         (single) => single.gender === value
//       );
//       setData(searchedData);
//     }
   
//   };

//   return (
//     <div>
//       <div className="pageone">
//         <p>Click me</p>
//       </div>
//       <h2>HTML Table</h2>
//       <div className="input">
//         <input
//           placeholder="Search"
//           onChange={(event) => searchHandler(event.target.value)}
//         />
//       </div>
//       <div className="selectDiv">
//         <select onChange={(event) => selectOption(event.target.value)}>
//           <option value="all">select gender</option>
//           <option value="all">select gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>

//       <table>
//         <tr>
//           <th>id</th>
//           <th>image</th>
//           <th>name</th>
//           <th>gender</th>
//         </tr>
//         {data?.map((single, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>
//               <img src={single.picture} alt="" />
//             </td>
//             <td>{single.name}</td>
//             <td>{single.gender}</td>
//           </tr>
//         ))}
//       </table>

//       <div className="onclickbtn">
//         <p onClick={()=>addRecord()}>Click me</p>
//       </div>
//       <p onClick={()=>secrecord()}>clickme</p>
//     <input onClick={()=>Adrecord()}></input>
//     </div>
    
//   );
// ;
// export default Pageone1;
