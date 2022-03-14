import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setError(!isError)}>
        Toggle error
      </button>
      {text && <h1>Hello world</h1>}
      {!text && <h1>Hello world</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error</p> : <p>No error</p>}
    </>
  );
};

export default ShortCircuit;
