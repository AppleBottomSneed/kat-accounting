import React from "react";
import "./services.css";
import { images } from "../../constants";

const Services = () => {
  return (
    <div className="section__padding">
      <div className="kat__services-container kat__services-container-padding">
        <div className="kat__services-title">
          <p>Our Services</p>
        </div>
        <div className="kat__services-infocard kat__services-container-padding">
          <div className="kat__services-infocard-feature">
            <div className="kat__services-infocard-icon">
              <img src={images.businessIcon} alt="business icon" />
            </div>
            <div className="kat__services-infocard-title">
              <p>Business Advisory</p>
            </div>
          </div>
          <div className="kat__services-infocard-description">
              <p>We’ll help you develop the right structure for your business that makes sure you are set up in the best way for where you want your business to go. Or if you have a good idea for a new business venture but don’t have expertise in the legal or financial aspects of creating a new business, we can help you:</p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Services;
