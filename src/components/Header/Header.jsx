import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <h2>Zubaer Cafe</h2>
        <nav>
         <a href="/vlogs">SignUP</a>
          <a href="/login">Login</a>
          
          <a href="/contactUs">About Us</a>
        </nav>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
