import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../cardSection/style.css";

const Cardsection = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState("0");
  const [show, setShow] = useState("");
  const [cart, setCart] = useState([]);
  const [index, setIndex] = useState(0);
  console.log("cart", cart);
  console.log("data", show);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const deleteHandler = (id) => {
    let removeFilter = cart.filter((e) => e.id !== id);
    setCart(removeFilter);
  };

  console.log("actdata", data);

  return (
    <div>
      <div className="displayflex">
        <div className="wrap">
          {data?.map((single, index) => (
            <div
              className={`background ${single?.active === 1 ? "border_active" : ""}`}
              onClick={() => {
                setModal("1");
                setShow(single);
                setIndex(index);
              }}
            >
              <div className="center">{single.name}</div>
              <div className="center">{single.username}</div>
              <div className="center">{single.email}</div>
            </div>
          ))}
        </div>
      </div>

      {modal === "1" && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setModal("0");
          }}
        >
          <div className="absolutediv">
            <div className="absoluteback">
              <span className="margin">{show?.name}</span>
              <span className="margin">{show?.username}</span>
              <span className="margin">{show?.email}</span>
              <button
                onClick={() => {
                  setCart([...cart, show]);
                  console.log("index",index)
                  let duplicate = data;
                  duplicate[index] = { ...show, active: 1 }
                  setData(duplicate)
                  setModal("2");
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </OutsideClickHandler>
      )}
      {modal === "2" && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setModal("0");
          }}
        >
          {cart?.length !== 0 && (
            <div className="sidenav">
              {cart?.map((single, index) => (
                <div className="inside_container">
                  <div className="card">
                    <span className="margin2">{single?.name}</span>
                    <span className="margin2">{single?.username}</span>
                    <span className="margin2">{single?.email}</span>
                    <button onClick={() =>
                      { deleteHandler(single.id);
                       
                      }}
                      >

                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </OutsideClickHandler>    
      )}
    </div>
  );
};
export default Cardsection;
