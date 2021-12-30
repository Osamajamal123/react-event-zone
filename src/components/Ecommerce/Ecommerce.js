import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../Ecommerce/style.css";
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
  console.log("data", data);
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
  // console.log("delete", Cookies.remove("userName"));
  return (
    <div>
      <div className="header">
        <div>{user}</div>
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
      <div className="flexdiv">
        {data?.map((single, index) => (
          <div
            className="background"
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
                    setCart([...cart, show]);
                    setOpen("2");
                    // let duplicate = data;
                    // duplicate[index] = { ...data, active: 1 };
                    // setData(duplicate);
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
                      <button onClick={() => deleteHandler(single.id)}>
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
