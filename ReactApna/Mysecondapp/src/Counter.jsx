import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);
  console.log("Counter rendered");
  let inCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount(25);
  };




  // function inCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>+</button>
    </div>
  );
}