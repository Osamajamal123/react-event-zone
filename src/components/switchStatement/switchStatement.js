import { useState } from "react";
const SwitchStatement = () => {
  const [result, setResult] = useState("");
  console.log("resule", result);
  const daysHandler = (no) => {
    let marks = parseInt(no);
    console.log(typeof marks);
    switch (true) {
      case marks > 100:
        setResult("value exceed from 100");
        break;
      case marks === 100:
        setResult("A+ grade");
        break;
      case marks >= 80:
        setResult("Excellent");
        break;
      case marks >= 60:
        setResult("Good");
        break;
      case marks >= 40:
        setResult("Fair");
        break;
      case marks >= 30:
        setResult("poor");
        break;
      case marks < 30:
        setResult("Fail");
        break;
      default:
        setResult("enter value between 1 and 100");
    }
  };

  return (
    <div>
      <input type={"number"} onChange={(e) => daysHandler(e.target.value)} />
      <div>{result}</div>
    </div>
  );
};
export default SwitchStatement;
