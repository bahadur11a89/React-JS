import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product-card">
      <h2 className="product-title">{props.name}</h2>
      <p className="product-price">Price: ₹{props.price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default Product;