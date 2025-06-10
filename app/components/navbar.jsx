import React from "react";
import Link from "next/link";
import '../globals.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link href="/">Meal Mind </Link>
      </div>
      <ul className="navbar-links">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/Blog">Blog </Link></li>
      </ul>
      <div className="navbar-login">
        <Link href="/login">Login</Link>
        <span className="separator">|</span>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
