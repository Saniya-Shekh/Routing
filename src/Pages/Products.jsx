import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div>Products</div>

      <div>
        <Link to="/products/mens">Mens</Link>
        <Link to="/products/womens">Womens</Link>
        <Link to="/products/childrens">Childrens</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Products;
