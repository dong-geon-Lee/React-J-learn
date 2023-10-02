import { useState } from "react";
import "./Counter.css";

const Conuter = () => {
  const [stepNum, setStepNum] = useState(0);
  const [count, setCount] = useState(0);

  const handleStepDes = () => {
    if (stepNum > 1) setStepNum((prevState) => prevState - 1);
  };

  const handleStepInc = () => {
    if (stepNum < 5) setStepNum((prevState) => prevState + 1);
  };

  const handleCountDes = () => {
    setCount((prevState) => prevState - stepNum);
  };

  const handleCountInc = () => {
    setCount((prevState) => prevState + stepNum);
  };

  const currentDates = "2023.10.1";
  const [year, month, dates] = currentDates
    .split(".")
    .filter((x) => x !== "")
    .map((y) => y.trim());

  return (
    <div className="firstainer__counter">
      <div className="btn__box">
        <button onClick={handleStepDes}>-</button>
        <h1>Step: {stepNum}</h1>
        <button onClick={handleStepInc}>+</button>
      </div>
      <div className="btn__box">
        <button onClick={handleCountDes}>-</button>
        <h1>Count: {count}</h1>
        <button onClick={handleCountInc}>+</button>
      </div>
      <h2 className="date__text">
        {count === 0
          ? "아무것도 없어"
          : `${count} days from today is ${
              year + " " + month + " " + (+dates - count)
            }`}
      </h2>
    </div>
  );
};

export default Conuter;
