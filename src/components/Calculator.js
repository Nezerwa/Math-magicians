import React from 'react';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator-output">0</div>
      <div className="calculator-wrapper">
        <div className="calculator-count">
          <div className="calculator-numbers">
            <b>AC</b>
            <b>+/-</b>
            <b>%</b>
          </div>
          <div className="calculator-numbers">
            <b>7</b>
            <b>8</b>
            <b>9</b>
          </div>
          <div className="calculator-numbers">
            <b>4</b>
            <b>5</b>
            <b>6</b>
          </div>
          <div className="calculator-numbers">
            <b>1</b>
            <b>2</b>
            <b>3</b>
          </div>
          <div className="calculator-numbers">
            <b>0</b>
            <b>.</b>
          </div>
        </div>
        <div className="calculator-symbol-cont">
          <b>÷</b>
          <b>×</b>
          <b>-</b>
          <b>+</b>
          <b>=</b>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
