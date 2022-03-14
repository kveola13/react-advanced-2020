import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  const handleClick = () => {
    console.log(title);
    title = "Random title 2";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
