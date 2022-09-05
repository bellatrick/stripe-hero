import React from "react";
import './product.css'
const ProductItem = ({ icon, title, subtitle }) => {
  return (
    <div className="product_item">
      <div>
        <img alt="icon" src={icon} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ProductItem;
