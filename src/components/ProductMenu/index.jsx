import React from "react";
import { businessMenuList, financialServiceMenuList, paymentMenuList } from "../../data";
import "./product.css";
import ProductItem from "./ProductItem";

const ProductMenu = () => {
  return (
    <div className="product_menu ">
      <div className="row1">
        <h3>Payments</h3>
        {paymentMenuList.map(({ icon, title, subtitle }) => (
          <ProductItem icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
      <div className="row1">
        <h3>Financial Services</h3>
        {financialServiceMenuList.map(({ icon, title, subtitle }) => (
          <ProductItem icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
      <div className="row1">
        <h3>Business Operations</h3>
        {businessMenuList.map(({ icon, title, subtitle }) => (
          <ProductItem icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
