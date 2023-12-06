import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { images } from "../../constants";
import "./navbar.css";

/* Creates the <Menu /> shortcut */
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#resources">Resources</a>
    </p>
    <p>
      <a href="#whyus">About Us</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

//BEM = block element modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kat__navbar">
      <div className="kat__navbar-links">
        <div className="kat__navbar-links_logo">
          <div className="kat__navbar-links_logo_big">
            <img src={images.logoPdf} alt="logo" />
          </div>
          <div className="kat__navbar-links_logo_mobile">
            <img src={images.logoSmall} alt="logo" />
          </div>
        </div>
        <div className="kat__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="kat__navbar-sign">
        <p>(08) 64603830</p>
      </div>
      <div className="kat__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)}/>
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/>
        )}
        {toggleMenu && (
          <div className="kat__navbar-menu_container scale-up-center">
            <div className="kat__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="kat__navbar-menu_container-links-sign">
              <p>(08) 64603830</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
