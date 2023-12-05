import React from 'react';
import { images } from '../../constants';
import "./footer.css";

const Footer = () => {
  return (
    <div className="kat__footer section__padding">
    <div className="kat__footer-links">
      <div className="kat__footer-links_contact">
        <h1 className="kat__footer-headtext">Contact Us</h1>
        <p>T2/152 Great Eastern Hwy, Ascot WA 6104</p>
        <p>(08) 1234 5678</p>
        <p></p>
      </div>
      <div className="kat__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p>"Sometimes a little comfort food can go a long way"</p>
        <img src={images.ntaaicon} alt="spoon" className='spoon__img' style={{ marginTop: 15}} />
        <div className="kat__footer-links_icons">
          
        </div>
      </div>
      <div className="kat__footer-links_work">
        <h1 className="kat__footer-headtext">Working Hours</h1>
        <p>Monday - Friday:</p>
        <p>9:30 am - 5pm</p>
        <p>Saturday</p>
        <p>11:30am - 11:00pm</p>
        <p>Sunday</p>
        <p>Closed</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p >© 2023 KAT Accounting Services. All Rights Reserved</p>
    </div>
  </div>
  )
}

export default Footer