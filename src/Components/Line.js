import { useState } from "react";

const Line = (props) => {
  const { text, symbol } = props;

  const [hiddenSpan, setHiddenSpan] = useState(true);

  const handleHover = () => {
    setHiddenSpan(!hiddenSpan);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(symbol);
  };

  return (
    <div
      className={`Line`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <div>{`${symbol ? symbol : ""} ${text ? text : ""}`}</div>
      <span className={hiddenSpan ? "hidden" : ""}>Click to copy !</span>
    </div>
  );
};

export default Line;
