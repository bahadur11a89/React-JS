import React from "react";

const Title = ({ title, price }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default Title;