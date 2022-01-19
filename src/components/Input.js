import React, { useState } from "react";
import Button from "../UI/Button";

const Input = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!props.buttonState) {
      return false;
    } else {
      props.onSubmitNumber(parseInt(enteredNumber));
      setEnteredNumber("");
    }
  };

  const numberInputHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  return (
    <section className="left">
      <form onSubmit={formSubmitHandler}>
        <input
          type="number"
          className="guess"
          onChange={numberInputHandler}
          value={enteredNumber}
          required
        />
        <Button
          className={`btn check ${!props.buttonState ? "disable" : ""}`}
          type={"submit"}
        >
          Check!
        </Button>
      </form>
    </section>
  );
};

export default Input;
