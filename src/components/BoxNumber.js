const BoxNumber = (props) => {
  return (
    <div className="containerNumber">
      <div className="number">
        <div className="questionMark">?</div>
      </div>
      <div
        className="realNumber"
        style={{
          zIndex: props.finalNumber === props.randomNumber ? "10" : "1",
        }}
      >
        {props.randomNumber}
      </div>
    </div>
  );
};

export default BoxNumber;
