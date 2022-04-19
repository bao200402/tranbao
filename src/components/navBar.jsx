import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
      <div className="logo justify-between flex items-center ">
        <FiShoppingCart className="text-h4" />
        <p className="font-bold"> Nippon Mart</p>
        <AiOutlineMenu className="text-h4" />
      </div>
      <div className="menu-items">
        <ul className="font-bold hidden">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/page">Course</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
