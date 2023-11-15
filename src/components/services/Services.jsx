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
          </div>
        
        
        
      </div>
    </div>
  );
};

export default Services;
