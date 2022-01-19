const Score = (props) => {
  return (
    <div>
      <p className="label-score">
        💯 Score: <span className="score">{props.score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{props.highScore}</span>
      </p>
    </div>
  );
};

export default Score;
