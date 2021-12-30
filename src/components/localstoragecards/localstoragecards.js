import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./style.css";
import Bag from "../../assetts/images/bag.png";
import OutsideClickHandler from "react-outside-click-handler";
import { withRouter } from "react-router";
import Cookies from "react-cookies";
const Ecommerce = (props) => {
  let { history } = props;
  console.log("history", history);
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);
  const [open, setOpen] = useState("0");
  const [cart, setCart] = useState([]);
  const [index, setIndex] = useState();
  const [user, setUser] = useState("");
  const [localstoragedata, setLocalstoragedata] = useState([]);
  console.log("localstorage", localstoragedata);
  console.log("border",data)
  useEffect(() => {
    let lastname = Cookies.load("userName");
    console.log("lastname", Cookies.load("userName"));
    if (!lastname) {
      console.log("test");
      history.push("/");
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          let record = [];
          json.map((single) => {
            record.push({
              ...single,
              active: 0,
              price: Math.floor(Math.random() * 11),
            });
          });
          setData(record);
          console.log(record);
          //   setData(json)
        });
      setUser(lastname?.Username);
    }
  let getData=localStorage.getItem("cartRecord");
  let localdata=JSON.parse(getData)
  if(localdata){
    setCart(localdata)
  }
console.log("localdata",getData)
console.log("localparse",localdata)
  }, []);
  const deleteHandler = (id) => {
    let removeFilter = cart.filter((e) => e.id !== id);
    setCart(removeFilter);
  };
  const totalPrice = () => {
    let Total = 0;
    cart?.map((price) => {
      Total = Total + parseInt(price?.price);
    });
    return Total ? parseInt(Total) : 0;
  };
  const logoutHandler = () => {
    Cookies.remove("userName");
    history.push("/");
  };
  const localHandler = (newRecord) => {
    if (!cart) {
      let record = [newRecord];
      let CartData = JSON.stringify(record);
      localStorage.setItem("cartRecord", CartData);
      setCart(record);
    } else {
      let record = [...cart, newRecord];
      let CartData = JSON.stringify(record);
      localStorage.setItem("cartRecord", CartData);
      setCart(record);
    }
    console.log("add to cart", [...cart, newRecord]);
    // setLocalstoragedata([...localstoragedata, show]);
  };
  // console.log("console",   localStorage.setItem("storagevalue"))
  // console.log("delete", Cookies.remove("userName"));
const removeBorder=(single,id)=>{
console.log("single",single);
let deletedrecord=data?.filter((single)=>single.id===id);

console.log("testfilter",deletedrecord[0])
}
  return (
    <div>
      <div className="header">
        <div>{user}</div>
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
      <div className="flexdiv">
        {data?.map((single, index) => (
          <div
            className={`background ${single?.active ===1 ? "bordercolor":""}`}
            onClick={() => {
              setShow(single);
              setOpen("1");
              setIndex(index);
            }}
          >
            <div className="bag">
              <img src={Bag} />
            </div>
            <div>{single.name}</div>
            <div>
              <h3>{single?.price}$</h3>
            </div>
          </div>
        ))}
      </div>
      {open === "1" && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen("0");
          }}
        >
          <div className="positionfixed">
            <div className="fixedposition">
              <div className="center">
                <div className="bag">
                  <img src={Bag} />
                </div>
                <div>{show?.name}</div>
                <div>{show?.price} $</div>
                <button
                  onClick={() => {
                    // setCart([...cart, show]);
                    setOpen("2");
                    let duplicate = [...data];
                    duplicate[index] = { ...show, active: 1 };
                    setData(duplicate);
                    localHandler(show);
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      )}
      {open === "2" && (
        <>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpen("0");
            }}
          >
            {cart?.length !== 0 ? (
              <div className="sidenav">
                {cart?.map((single) => (
                  <div className="sidenavigation">
                    <div className="width">
                      <div className="bag">
                        <img src={Bag} />
                      </div>
                      <div>{single?.name}</div>
                      <div>{single?.price} $</div>
                      <button onClick={() => {
                          deleteHandler(single.id) ;
                          removeBorder(single,single.id)    
                      }
                        }>
                        delete
                      </button>
                    </div>
                  </div>
                ))}
                <div>{totalPrice()}</div>
              </div>
            ) : (
              <div className="datacenter">
                <h1>No Data Found</h1>
              </div>
            )}
          </OutsideClickHandler>
        </>
      )}
    </div>
  );
};
export default withRouter(Ecommerce);
