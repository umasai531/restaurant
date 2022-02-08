import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { images } from "../../constants";
import "./Navbar.css";

import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {

  const [toggleMenu,setToggleMenu] =useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar_logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar_links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar_login">
        <a href="#login" className="p__opensans">
          Login/Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book table
        </a>
      </div>
      <div className="app__navbar_smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide-bottom">
            <MdRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar_smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#home">About</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
