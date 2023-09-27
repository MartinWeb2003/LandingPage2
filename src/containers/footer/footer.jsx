import React from 'react';
import gpt3Logo from '../../assets/logo1.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Ready to Start Your<br/>Investment Journey?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Non-Existent Avenue 47, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>E-mail</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Website</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company info</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contacts</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact us</h4>
        <p>jondoecompany@gmail.com</p>
        <p>(1)23-456-789</p>
        <p>info@notreal.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@20213 AInvestor. All rights reserved</p>
    </div>
  </div>
);

export default Footer;