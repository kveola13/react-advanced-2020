import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [compValue, setCompValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      //setCompValue(compValue + 1);
      setCompValue((prevVal) => {
        return prevVal + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{compValue}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
