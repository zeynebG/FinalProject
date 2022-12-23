import "./Calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  const handleClick = (e) => {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  };
  const clear = (e) => {
    setNum(0);
  };

  const percentage = (e) => {
    setNum(num / 100);
  };

  const oppositeSign = (e) => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };
  const operatorHandler = (e) => {
    setOperator(e.target.value);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
    console.log("calculate");
  };

  const backspace = (e) => {
    console.log(num.length);
    if (num.length > 1) {
      setNum(num.slice(0, num.length - 1));
    } else {
      setNum(0);
    }
  };

  return (
    <div className="calculator">
      <h1 className="outputPart">{num}</h1>
      <div className="buttons">
        <button className="clearButtons" onClick={backspace}>
          C
        </button>
        <button className="clearButtons" onClick={clear}>
          AC
        </button>
        <button className="operatorButtons" onClick={percentage}>
          %
        </button>
        <button className="operatorButtons" onClick={operatorHandler} value="/">
          /
        </button>
        <button onClick={handleClick} value={7}>
          7
        </button>
        <button onClick={handleClick} value={8}>
          8
        </button>
        <button onClick={handleClick} value={9}>
          9
        </button>
        <button className="operatorButtons" onClick={operatorHandler} value="x">
          x
        </button>
        <button onClick={handleClick} value={4}>
          4
        </button>
        <button onClick={handleClick} value={5}>
          5
        </button>
        <button onClick={handleClick} value={6}>
          6
        </button>
        <button className="operatorButtons" onClick={operatorHandler} value="-">
          -
        </button>
        <button onClick={handleClick} value={1}>
          1
        </button>
        <button onClick={handleClick} value={2}>
          2
        </button>
        <button onClick={handleClick} value={3}>
          3
        </button>
        <button className="operatorButtons" onClick={operatorHandler} value="+">
          +
        </button>
        <button onClick={handleClick} value={0}>
          0
        </button>
        <button onClick={handleClick} value=".">
          .
        </button>
        <button className="operatorButtons" onClick={oppositeSign}>
          +/-
        </button>
        <button className="equalSign" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
