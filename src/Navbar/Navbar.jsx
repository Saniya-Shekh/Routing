import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around border-2 h-20">
      <div>Logo</div>
      <div className="flex gap-10">
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/products'> Products</Link>
      </div>
      <div className="flex gap-10">
        <Link to='/login'> Login </Link>
        {/* <Link to='/register'>Registration</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
