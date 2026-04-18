import React, { useRef } from "react";

const Useref = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value = "Raj";
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} /> <br /><br />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};

export default Useref;