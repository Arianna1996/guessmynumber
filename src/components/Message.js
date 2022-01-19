import Score from "./Score";

const Message = (props) => {
  let newmessage;

  if (!props.final) {
    newmessage = "Start guessing...";
  } else if (!props.buttonState) {
    newmessage = "You Lost!!!";
  } else if (props.final > 20 || props.final < 1 || props.final.trim === 0) {
    newmessage = "Enter a number between 1 and 20";
  } else if (props.final === props.random) {
    newmessage = "You win!";
  } else if (props.final > props.random) {
    newmessage = "Too high, try again!";
  } else {
    newmessage = "Too low, try again!";
  }

  return (
    <section className="right">
      <p className="message">{newmessage}</p>
      <Score score={props.score} highScore={props.highScore} />
    </section>
  );
};

export default Message;
