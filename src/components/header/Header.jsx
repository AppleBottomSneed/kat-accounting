import React from "react";
import people from "../../components/assets/people.png";
import tax from "../../components/assets/frontcovergraphics.png";
import "./header.css";

const Header = () => {
  return (
    <div className="kat__header section__padding" id="home">
      <div className="kat__header-content">
        <h1>
          <span className="kat__text-blue">Tax</span>
          <span className="kat__text-black"> done</span>
          <span className="kat__text-red"> right</span>
          <span className="kat__text-black">.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro
          eius exercitationem doloremque vel eveniet, repellendus sed! Nobis
          fugiat dignissimos enim asperiores odit, dolorem recusandae illo
          maiores aperiam, tempore itaque.
        </p>
        <div className="kat__header-content__input">
          <button type="button">Contact Us</button>
        </div>
      </div>
      <div className="kat__header-image">
        <img src={tax} alt="tax header" />
      </div>
    </div>
  );
};

export default Header;
