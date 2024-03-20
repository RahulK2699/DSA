import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    let lastChar = display[display.length - 1];

    if (
      (lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/") &&
      value.includes[("+", "-", "*", "/")]
    ) {
      setDisplay(
        (prevDisplay) =>
          prevDisplay.substring(0, prevDisplay.length - 1) + value
      );
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div>
      <div className="display">{display}</div>
      <div className="calculator">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
