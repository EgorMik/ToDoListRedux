import React from 'react';
// import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shop-header row">
      <Link to="/">List
        <div className="logo text-dark"></div>
      </Link>
      <Link to="/form">Add form
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
        
        </div>
      </Link>
    </header>
  );
};

export default Header;


