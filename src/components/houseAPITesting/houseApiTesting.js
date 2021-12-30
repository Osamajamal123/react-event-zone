import { useState, useEffect } from "react";
import HouseApi from "../../houseRecord.json";
import "./style.css";
const HouseApiTesting = () => {
  const [epcone, setEpcOne] = useState();
  console.log("epcstate", epcone);
  const epcHandler = (recordhouse, value) => {
    let epcOne = recordhouse?.filter((single) => single.epc_label === value);
    let epcSort = epcOne.sort(
      (a, b) => parseInt(b.investment_cost) - parseInt(a.investment_cost)
    );
    let indexZero = epcSort[0];
    let splitRenovation = indexZero.renovation.split("_");
    console.log("splitRenovation", splitRenovation);
    setEpcOne(splitRenovation);
  };
  useEffect(() => {
    epcHandler(HouseApi, "1");
  }, []);
  const epcChecked = (value) => {
    if (value === true) {
      let epctwo = HouseApi?.filter((single) => single.epc_label === "2");
      let indextwo = epctwo[0];
      let splitRenovationtwo = indextwo.renovation.split("_");
      setEpcOne(splitRenovationtwo);
    } else {
      epcHandler(HouseApi, "1");
    }
  };
  const epcRadio = (value) => {
    if (value === true) {
      let filterone = HouseApi?.filter((single) => single.epc_label === "1");
      let epcSorttwo = filterone.sort(
        (a, b) => parseInt(b.investment_cost) - parseInt(a.investment_cost)
      );
      console.log("radiosort", epcSorttwo);
      let indexZero = epcSorttwo[0];
      let newArray = [];
      let splitRenovationtwo2 = indexZero.renovation.split("_");
      splitRenovationtwo2.forEach((item) => {
        newArray.push({
          name: item,
          active: 1,
        });
      });
      console.log(splitRenovationtwo2);
      console.log(newArray);
      setEpcOne(newArray);
    }
  };

  return (
    <div className="container">
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          marginTop: "30px",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h1>Our Recomendations</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
              alignItems: "center",
            }}
          >
            <h6 style={{ padding: "0px 10px" }}>plan label A</h6>
            <label class="switch">
              <input
                type="checkbox"
                onChange={(event) => epcChecked(event.target.checked)}
              />
              <span class="slider round"></span>
            </label>
            <h6 style={{ padding: "0px 10px" }}>plan label B</h6>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              style={{ padding: "50px" }}
              onChange={(event) => epcRadio(event.target.checked)}
            />
            <h4 style={{ paddingLeft: "10px" }}>Custom</h4>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {epcone?.map((single) => (
            <div className={` ${single.active === 1 ? "blueborder" : "blackborder"}`}>
              {single?.name ? single?.name : single}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HouseApiTesting;
