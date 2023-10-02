import { useState } from "react";
import "./Calculater.css";

const Calculater = () => {
  const [calculateInfo, setCalculateInfo] = useState({
    bill: 0,
    service: "",
  });

  const onChange = (e: any) => {
    setCalculateInfo({ ...calculateInfo, [e.target.name]: e.target.value });
  };

  const handleCalculReset = () => {
    setCalculateInfo({
      bill: 0,
      service: "",
    });
  };

  const calculServiceTips = (service: string) => {
    switch (service) {
      case "불만족":
        return 0.05;
      case "만족":
        return 0.1;
      case "감동":
        return 0.2;
      default:
        return 0;
    }
  };

  const tips = calculServiceTips(calculateInfo.service);
  const sumResults =
    Number(calculateInfo.bill) + Number(calculateInfo.bill) * Number(tips);

  return (
    <div className="container">
      <div className="typo">
        <label className="label__text">How much was the bill?</label>
        <input
          type="text"
          className="cal__input typo"
          value={calculateInfo.bill}
          onChange={onChange}
          name="bill"
        />
      </div>
      <div>
        <label className="label__text">How did you like the service?</label>
        <select
          className="cal__input"
          onChange={onChange}
          value={calculateInfo.service}
          name="service"
        >
          <option value="">선택하세요</option>
          <option value="불만족">불만족 5%</option>
          <option value="만족">만족 10%</option>
          <option value="감동">감동 20%</option>
        </select>
      </div>

      <h1 className="result__text">
        You pay ${sumResults} (${calculateInfo.bill} + $
        {calculateInfo.bill * tips} tip)
      </h1>

      <button className="btn__reset" onClick={handleCalculReset}>
        Reset
      </button>
    </div>
  );
};

export default Calculater;
