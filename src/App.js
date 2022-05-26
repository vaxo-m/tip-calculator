import React, { useState } from "react";
import { Input, TipButton, TipBlock } from "./components";

import { Dollar } from "./icons";

import logo from "./images/logo.svg";
import userIcon from "./images/icon-person.svg";

import "./css/global.css";

function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const tipValues = [5, 10, 15, 25, 50];

  const calculable = bill && tip && numberOfPeople;
  const tipPerPerson = calculable ? ((bill / numberOfPeople) * tip) / 100 : 0;
  const totalAmount = calculable ? bill / numberOfPeople + tipPerPerson : 0;

  const handleChangeTip = (value) => {
    setTip(value);
    setCustomTip("");
  };

  const handleCustomTip = (value) => {
    setCustomTip(value);
    setTip(value);
  };

  const handleReset = () => {
    setBill(0);
    setNumberOfPeople(0);
    setTip(0);
    setCustomTip("");
  };

  return (
    <div className="main">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="board">
        <div className="left-part">
          <Input
            icon={<Dollar height={19} width={15} />}
            title={"Bill"}
            getValue={(value) => setBill(value)}
            value={bill}
            min="0"
          />
          <div className="tips">
            <p>Select Tip %</p>
            <div className="tips-wrapper">
              {tipValues.map((value, i) => (
                <TipButton
                  key={i}
                  value={value}
                  getValue={handleChangeTip}
                  isSelected={tip === value}
                />
              ))}
              <div className="customTip">
                <Input
                  placeholder={"Custom"}
                  getValue={handleCustomTip}
                  value={customTip}
                  min="0"
                />
              </div>
            </div>
          </div>
          <Input
            icon={<img src={userIcon} alt="userIcon" />}
            title={"Number of People"}
            errorText={"Can't be zero"}
            error={bill && tip && !numberOfPeople}
            getValue={setNumberOfPeople}
            value={numberOfPeople}
            min="0"
          />
        </div>
        <div className="right-part">
          <div className="tip-blocks">
            <TipBlock
              value={tipPerPerson.toFixed(2)}
              numeratorText={"Tip Amount"}
            />
            <TipBlock value={totalAmount.toFixed(2)} numeratorText={"Total"} />
          </div>
          <div className="reset-wrapper">
            <button
              className={`${!(bill || numberOfPeople || tip) && "disabled"}`}
              onClick={handleReset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
