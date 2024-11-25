import React from 'react';
import { BsCart4 } from "react-icons/bs";

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">CILSA SHOP</div>
      <nav className="nav">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#products">Products</a>
        <a className="nav-link" href="#contact">Contact</a>
        <BsCart4 className='icon' />
      </nav>

    </header>
  );
};

export default Header;
