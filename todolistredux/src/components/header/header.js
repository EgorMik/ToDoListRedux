import React from 'react';
// import './header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">List</div>
      </Link>
      <Link to="/form">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
        
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;