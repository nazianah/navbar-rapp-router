import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../Img/icons8-menu.svg"; // Add your menu (hamburger) SVG icon
import crossIcon from "../Img/cross-svgrepo-com.svg"; // Add your cross (close) SVG icon

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBar = {
    logoUrl: "https://www.rapp.com/media/t3slemu2/rapplogo-mobile.svg",
    logoMobileUrl:
      "https://www.rapp.com/media/jbypdeye/rappmobilelogo-whiteborder.png",
    navItems: [
      { url: "/about", text: "ABOUT", color: "#FF6B00" },
      { url: "/work", text: "WORK", color: "#E30029" },
      { url: "/locations", text: "LOCATIONS", color: "#FFD300" },
      { url: "/careers", text: "CAREERS", color: "#C2D500" },
      { url: "/news", text: "NEWS", color: "#008FBE" },
    ],
  };

  return (
    <nav className={isOpen ? "open" : ""}>
      <a href="/" className="logo">
        <img
          src={isOpen ? navBar.logoMobileUrl : navBar.logoUrl}
          alt="RAPP Logo"
        />
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={isOpen ? crossIcon : menuIcon} alt="Menu Icon" />
      </button>
      <ul className={`navbar ${isOpen ? "open" : ""}`}>
        {navBar.navItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} style={{ "--color": item.color }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
