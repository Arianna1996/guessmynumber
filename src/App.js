import React, { useState } from "react";
import Button from "./UI/Button";
import BoxNumber from "./components/BoxNumber";
import Message from "./components/Message";
import Input from "./components/Input";

function App() {
  const [finalNumber, setFinalNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [enableButton, setEnableButton] = useState(true);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (20 - 1 + 1)) + 1
  );

  const insertNumber = (number) => {
    setFinalNumber(number);
    if (number !== randomNumber) {
      if (score > 0) {
        setScore((prevState) => prevState - 1);
      } else {
        setEnableButton(false);
      }
    } else {
      setHighScore((prevState) => {
        if (prevState > score) {
          setHighScore(prevState);
        } else {
          setHighScore(score);
        }
      });
    }
  };

  const refresh = () => {
    setScore(20);
    setRandomNumber(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
    setFinalNumber("");
    setEnableButton(true);
  };

  console.log(randomNumber);
  return (
    <div
      style={{
        backgroundColor:
          finalNumber === randomNumber
            ? "#60b347"
            : !enableButton
            ? "red"
            : "#222",
      }}
    >
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <Button onClick={refresh} className={"btn again"}>
          Again!
        </Button>
        <BoxNumber randomNumber={randomNumber} finalNumber={finalNumber} />
      </header>
      <main>
        <Input
          onSubmitNumber={insertNumber}
          score={score}
          buttonState={enableButton}
        />
        <Message
          random={randomNumber}
          final={finalNumber}
          score={score}
          highScore={highScore}
          buttonState={enableButton}
        />
      </main>
    </div>
  );
}

export default App;
