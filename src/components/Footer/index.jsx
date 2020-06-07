import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
    {/* below these are svg images of the curve and dots */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 501"
        className="svg-footer"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            y1="0.5"
            x2="1"
            y2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#4c84ff" />
            <stop offset="1" stop-color="#783dff" />
          </linearGradient>
          <clipPath id="clip-curve-1">
            <rect width="1920" height="501" />
          </clipPath>
        </defs>
        <g id="curve-1" clip-path="url(#clip-curve-1)">
          <path
            id="Shape_865"
            data-name="Shape 865"
            d="M1920.9,5978.995c-139.351,14.684-154.015,136.948-288.963,140.755-132,3.721-177.586-111.173-308.533-106.257-133.948,5.029-158.735,127.973-292.535,132.474-128.895,4.338-175.331-107.418-303.963-100.735-120.093,6.24-141.9,106.887-262.825,109.016-96.527,1.7-126.9-61.649-235.4-69-101.466-6.872-167.405,40.5-227.683,80.037V6479H1921"
            transform="translate(-1 -5979)"
            opacity="0.83"
            fill="url(#linear-gradient)"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1840 543"
        className="svg-footer"
      >
        <g id="circle-footer" clip-path="url(#clip-circle-footer)">
          <g id="Footer" transform="translate(-79 -7713)">
            <g id="Grupo_610" data-name="Grupo 610" opacity="0.2">
              <circle
                id="Elipse_13"
                data-name="Elipse 13"
                cx="48.753"
                cy="48.753"
                r="48.753"
                transform="translate(1857.539 7845.971) rotate(-150)"
                fill="#fff"
              />
              <circle
                id="Elipse_12"
                data-name="Elipse 12"
                cx="48.753"
                cy="48.753"
                r="48.753"
                transform="translate(98 8118.794)"
                fill="#fff"
              />
              <circle
                id="Elipse_14"
                data-name="Elipse 14"
                cx="30.235"
                cy="30.235"
                r="30.235"
                transform="translate(157.713 8039.428)"
                fill="#fff"
              />
              <circle
                id="Elipse_15"
                data-name="Elipse 15"
                cx="30.235"
                cy="30.235"
                r="30.235"
                transform="translate(210.624 8181.531)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </svg>
        {/* above ... these are svg images of the curve and dots */}
      <div className="footer-top">
        <div className="footer-part lead">
          <img style = {{width: "6em"}} src="./logo.png" alt="" />
          <p>
            Me old mucker Harry don't get shirty with me he nicked it up the
            kyver gutted mate spend a penny, bloke my good sir in my flat
            bleeding quaint.!
          </p>
          <div className="socials">
          <img src="./fb.png" alt="" />
          <img src="./tw.png" alt="" />
          <img src="./cl.png" alt="" />
          <img src="./lkin.png" alt="" />
          </div>
        </div>

        <div className="footer-part">
          <h4>Company</h4>
          <Link className="footer-links" to={`/`}>
            <p>Home</p>
          </Link>
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
