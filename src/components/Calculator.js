/* eslint-disable */
import React, { useState } from "react";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setObj(calculate(obj, buttonName));
  };

  return (
    <div className="calculator-contaier">
      <div className="calculator-output">{obj.next || obj.total || 0}</div>
      <div className="calculator-wrapper">
        <div className="calculator-count">
          <div className="calculator-numbers">
            <button onClick={() => handleClick("AC")}>AC</button>
            <button onClick={() => handleClick("+/-")}>+/-</button>
            <button onClick={() => handleClick("%")}>%</button>
          </div>
          <div className="calculator-numbers">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
          </div>
          <div className="calculator-numbers">
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
          </div>
          <div className="calculator-numbers">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
          </div>
          <div className="calculator-numbers">
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick(".")}>.</button>
          </div>
        </div>
        <div className="calculator-symbol-cont">
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>×</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
