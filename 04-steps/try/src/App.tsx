import { useState } from "react";
import Conuter from "./components/Conuter";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((prevState) => prevState - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((prevState) => prevState + 1);
  };

  const closeStep = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className="close" onClick={closeStep}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Conuter />
    </>
  );
};

export default App;
