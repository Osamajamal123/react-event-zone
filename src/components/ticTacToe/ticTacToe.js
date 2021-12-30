import { useState, useEffect } from "react";
const TicTacToe = () => {
  const [indextwo, setIndexTwo] = useState();
  const [gamevalue, setGameValue] = useState("");
  useEffect(() => {
    setIndexTwo(boxArray);
  }, []);
  let boxArray = [
    {
      id: 1,
      checked: "",
    },
    {
      id: 2,
      checked: "",
    },
    {
      id: 3,
      checked: "",
    },
    {
      id: 4,
      checked: "",
    },
    {
      id: 5,
      checked: "",
    },
    {
      id: 6,
      checked: "",
    },
    {
      id: 7,
      checked: "",
    },
    {
      id: 8,
      checked: "",
    },
    {
      id: 9,
      checked: "",
    },
  ];
  const gameHandler = (index, key) => {
    console.log("index", index);
    let indexdata = indextwo[index];
    console.log("indexdata", indexdata);
    indexdata.checked = key;
    let duplicate = [...indextwo];
    duplicate[index] = indexdata;
    setIndexTwo(duplicate);
    console.log("data", indextwo);
    if (
      indextwo[0].checked === "x" &&
      indextwo[1].checked === "x" &&
      indextwo[2].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[0].checked === "x" &&
      indextwo[3].checked === "x" &&
      indextwo[6].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[6].checked === "x" &&
      indextwo[7].checked === "x" &&
      indextwo[8].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[0].checked === "x" &&
      indextwo[4].checked === "x" &&
      indextwo[8].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[1].checked === "x" &&
      indextwo[4].checked === "x" &&
      indextwo[7].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[2].checked === "x" &&
      indextwo[5].checked === "x" &&
      indextwo[8].checked === "x"
    ) {
      alert("X wins");
    }
    if (
      indextwo[3].checked === "x" &&
      indextwo[4].checked === "x" &&
      indextwo[5].checked === "x"
    ) {
      alert("X wins");
    }
    // o wins
    if (
      indextwo[0].checked === "o" &&
      indextwo[1].checked === "o" &&
      indextwo[2].checked === "o"
    ) {
      alert("0 wins");
    }
    if (
      indextwo[0].checked === "o" &&
      indextwo[3].checked === "o" &&
      indextwo[6].checked === "o"
    ) {
      alert("O wins");
    }
    if (
      indextwo[6].checked === "o" &&
      indextwo[7].checked === "o" &&
      indextwo[8].checked === "o"
    ) {
      alert("0 wins");
    }
    if (
      indextwo[0].checked === "o" &&
      indextwo[4].checked === "o" &&
      indextwo[8].checked === "o"
    ) {
      alert("o wins");
    }
    if (
      indextwo[1].checked === "o" &&
      indextwo[4].checked === "o" &&
      indextwo[7].checked === "o"
    ) {
      alert("o wins");
    }
    if (
      indextwo[2].checked === "o" &&
      indextwo[5].checked === "o" &&
      indextwo[8].checked === "o"
    ) {
      alert("O wins");
    }
    if (
      indextwo[3].checked === "o" &&
      indextwo[4].checked === "o" &&
      indextwo[5].checked === "o"
    ) {
      alert("O wins");
    }
  };
const restartHandler=()=>{
  setIndexTwo(boxArray);
}
  return (
    <div className="container">
       <button onClick={()=>restartHandler()}>Restart</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "50%",
        }}
      >
       
        {indextwo?.map((single, index) => (
          <div
            style={{
              width: "30%",
              height: "100px",
              margin: "1px",
              background: "#2962ff",
              color: "white",
              fontSize: "30px",
              textAlign: "center",
              paddingTop: "13px",
            }}
            onClick={() => {
              if (gamevalue === "") {
                setGameValue("x");
                gameHandler(index, "x");
              } else if (gamevalue === "x") {
                setGameValue("o");
                gameHandler(index, "o");
              } else {
                setGameValue("x");
                gameHandler(index, "x");
              }
            }}
          >
            {single?.checked}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TicTacToe;
