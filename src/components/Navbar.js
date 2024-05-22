import React, { useState } from 'react';
import LeftNavBar from './LeftNavBar';
import '../styles/navbar.css';

const NavBar = () => {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="menu-icon" onClick={handleMenuClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="navbar-center">
          <img
            style={{ width: "3.6875rem", height: "1.375rem", marginLeft: "15px" }}
            src="https://web.furrl.in/_next/static/media/Furrl.13550a62.svg"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="navbar-right">
          <a href="https://furrl.in/wishlist">
            <img src="https://web.furrl.in/_next/static/media/Whislist.2ac94d87.svg" alt="Bookmark" className="icon" />
          </a>
          <a href="https://furrl.in/cart">
            <img src="https://web.furrl.in/_next/static/media/Bag.b94fa005.svg" alt="Bag" className="icon" />
          </a>
        </div>
      </nav>
      <LeftNavBar setIsLeftNavOpen={setIsLeftNavOpen} isOpen={isLeftNavOpen} />
 
    </>
  );
};

export default NavBar;