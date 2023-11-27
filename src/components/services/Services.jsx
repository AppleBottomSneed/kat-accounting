import React from "react";
import "./services.css";
import { data } from "../../constants";
 

const ServiceCard = ({service: { imgUrl, title, description }}) => (
  <div className="kat__services-infocard kat__services-container-padding">
    <div className="kat__services-infocard-feature">
      <div className="kat__services-infocard-icon">
        <img src={imgUrl} alt="business icon" />
      </div>
      <div className="kat__services-infocard-title">
        <p>{title}</p>
      </div>
    </div>
    <div className="kat__services-infocard-description">
        <p>{description}</p>
    </div>
    <div className="kat__services-infocard-button">
      <button>Learn More</button>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="section__padding">
      <div className="kat__services-container kat__services-container-padding">
        <div className="kat__services-title">
          <p>Our Services</p>
        </div>
        <div className="kat__services-infocard-flex">
          {data.services.map((service) => <ServiceCard service={service} key={service.title} />)}
        </div>
        <div className="kat__services-infocard-viewall">
          <button>View All Services</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
