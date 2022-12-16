import { useState } from "react";
import "./FoodAction.css";
const FoodAction = () => {
  const [inputAmount, setInputAmount] = useState(0);

  const handleSubmitClick = (value) => {
    console.log({ value });
  };

  const inputOnChange = (input) => {
    console.log({ input: input?.target?.value });
    setInputAmount(input?.target?.value);
  };

  return (
    <div className="food-action">
      <div>
        <label className="action-label">Amount</label>
        <input
          onChange={(value) => {
            inputOnChange(value);
          }}
          type="number"
          min="0"
          max="10"
          inputMode="numeric"
          value={inputAmount}
          className="action-input"
        />
      </div>
      <div>
        <button onClick={handleSubmitClick} className="action-button">
          + Add
        </button>
      </div>
    </div>
  );
};

export default FoodAction;
