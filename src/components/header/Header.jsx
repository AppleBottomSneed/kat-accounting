import React from "react";
import people from "../../components/assets/people.png";
import tax from "../../components/assets/frontcovergraphics.png";
import "./header.css";

const Header = () => {
  return (
    <div className="kat__header section__padding" id="home">
      <div className="kat__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro
          eius exercitationem doloremque vel eveniet, repellendus sed! Nobis
          fugiat dignissimos enim asperiores odit, dolorem recusandae illo
          maiores aperiam, tempore itaque.
        </p>
        <div className="kat__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="kat__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access</p>
        </div>
      </div>
      <div className="kat__header-image">
        <img src={tax} alt="tax header" />
      </div>
    </div>
  );
};

export default Header;
