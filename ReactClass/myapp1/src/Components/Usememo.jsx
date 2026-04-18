import React, { useState, useMemo } from "react";

const Usememo = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const demo = (num) => {
    console.log("render");
    return num;
  };

  const r = useMemo(() => demo(count), [count]);

  return (
    <>
      <h1>{r}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <br /><br />

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default Usememo;