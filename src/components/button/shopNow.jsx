import React from "react";
import { Link } from "react-router-dom";
const ShopNow = () => {
  return (
    <button className="px-5 py-2 text-body-3 bg-success">
      <Link to="/shop">Shop Now</Link>
    </button>
  );
};

export default ShopNow;
