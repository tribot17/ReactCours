import React, { useState } from "react";
import DisplayNumber from "./DisplayNumber";

const Calculatrice = () => {
  const [number, setNumber] = useState();
  const [number2, setNumber2] = useState();
  const [operator, setOperator] = useState();
  const [firstCalc, setFirstCalc] = useState(false);
  const [calcul, setCalcul] = useState();

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleNumberChange = (e) => {
    let temp =
      number == undefined ? e.target.innerHTML : number + e.target.innerHTML;
    let temp2 =
      number2 == undefined ? e.target.innerHTML : number2 + e.target.innerHTML;
    if (!firstCalc) setNumber(temp);
    else setNumber2(temp2);
  };

  const handleOperator = (e) => {
    setOperator(e.target.innerHTML);
    setFirstCalc(true);
  };

  const handleCalcul = () => {
    let nb1 = parseFloat(number);
    let nb2 = parseFloat(number2);
    let calculnb;
    switch (operator) {
      case "+":
        calculnb = nb1 + nb2;
        break;
      case "-":
        calculnb = nb1 - nb2;
        break;
      default:
        throw new Error();
    }
    setFirstCalc(false);
  };

  return (
    <div>
      <div>
        {array.map((i, index) => (
          <button onClick={handleNumberChange} key={index}>
            {i}
          </button>
        ))}
        <br />
        <button onClick={handleOperator}>+</button>
        <button onClick={handleOperator}>-</button>
        <button onClick={handleOperator}>/</button>
        <button onClick={handleOperator}>%</button>
        <button onClick={handleCalcul}>=</button>
        <DisplayNumber number={firstCalc ? number2 : number} />
      </div>
    </div>
  );
};

export default Calculatrice;
