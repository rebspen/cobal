import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-part lead">
          <img src="./logo.png" alt="" />
          <p>
            Me old mucker Harry don't get shirty with me he nicked it up the
            kyver gutted mate spend a penny, bloke my good sir in my flat
            bleeding quaint.!
          </p>
          <div>logos</div>
        </div>

        <div className="footer-part">
          <h4>Company</h4>
          <p>Home</p>
          <p>Features</p>
          <p>Screenshots</p>
          <p>Pricing</p>
          <p>Team</p>
        </div>

        <div className="footer-part">
          <h4>Help</h4>
          <p>Help Center</p>
          <p>FAQ's</p>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contacts</p>
        </div>

        <div className="footer-part">
          <h4>Solutions</h4>
          <p>Consumer</p>
          <p>Saas</p>
          <p>Education</p>
          <p>Gaming</p>
          <p>Financial Services</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p> &copy; indianpix | All rights reserved 2019</p>
      </div>
    </div>
  );
};

export default Footer;
