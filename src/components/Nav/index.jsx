import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "../Button";

const Nav = ({ button, colour}) => {
  return (
    <div className="nav" style= {{backgroundColor: colour}}>
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <div className="nav-title">
          <img className="branding" src="./logo.png" alt="" />
        </div>
      </div>

      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link className="nav-link" to={`/`}>
          Home
        </Link>
        <Link className="nav-link" to={`#`}>
          Absenses
        </Link>
        <Link className="nav-link" to={`/team`}>
          Employees
        </Link>
        {button && (
          <Link
            className="nav-link"
            style={{ padding: "7px 4px 7px 4px" }}
            to={`/new-employee`}
          >
            <Button small>New Employee</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
