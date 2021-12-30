import { useState,useEffect } from "react/cjs/react.development";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import "./style.css";
import { withRouter } from "react-router";

const Paginationapis = (props) => {
    let{history}=props
    const[data, setData]=useState();
    const[totalpage, setTotalpage]=useState();
    const[currentpage, setCurrentpage]=useState();
    console.log("data",data)
    console.log("totalpage",totalpage)
    console.log("currentpage",currentpage)

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
          .then((response) => response.json())
          .then((json) => {
              setData(json.data);
              setTotalpage(json.total_pages);
              setCurrentpage(json.page)
        });

      }, []);
      const handlePageClick=(event)=>{
          console.log("event",event)
          let eventSelected=event.selected+1
          fetch("https://reqres.in/api/users?page="+eventSelected)
          .then((response) => response.json())
          .then((json) => {
              setData(json.data);
              setTotalpage(json.total_pages);
              setCurrentpage(json.page);
              history.push("/users?page="+eventSelected)
          })
      }
  return (
  <div>
  <table>
      <tr>
          <th>id</th>
          <th>email</th>
          <th>firstname</th>
          <th>secondname</th>
      </tr>
      {data?.map((single,index)=>(
          <tr key={index}>
              <td>{single?.id}</td>
              <td>{single?.email}</td>
              <td>{single?.first_name}</td>
              <td>{single?.last_name}</td>
          </tr>
      ))

      }
  </table>
  <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={totalpage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  </div>
  )
};
export default withRouter(Paginationapis);
