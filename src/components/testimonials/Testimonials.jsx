import React from 'react';
import './testimonials.css';
import { data } from '../../constants';

const Clients = ({client: { imgUrl, review, reviewer, companyName }}) => (
  <div className="kat__testimonial-review-card-content">
    <img src={imgUrl} alt="" />
    <div className="kat__testimonial-review-description">
      <p>{review}</p>
    </div>
    <div className="kat__testimonial-redline"></div>
    <div className="kat__testimonial-review-subtitle">
      <p>{reviewer}</p>
      <p>{companyName}</p>
    </div>
  </div>
  
)

const Testimonials = () => {
  return (
    <div className="kat__testimonial-bg section__padding">
      <div className="kat__testimonial-flexbox">
        <div className="kat__testimonial-title">
          <p>What Our Clients Say:</p>
        </div>
        <div className="kat__testimonial-review-card">
          {data.clients.map((client) => <Clients client={client} />)}
        </div>
      </div>
    </div>
  )
}

export default Testimonials