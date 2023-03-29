import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
      return (
            <div className="header">
                  <img src={logo} alt="" />
                  <div>
                        <a href="">Home</a>
                        <a href="">Inventory</a>
                        <a href="">Contact</a>
                        <a href="">About</a>
                  </div>
            </div>
      );
};

export default Header;