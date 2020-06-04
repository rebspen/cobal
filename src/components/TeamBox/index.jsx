import React from "react";
import "./style.css";
import { GoPencil, GoX } from "react-icons/go";
import { Link } from "react-router-dom";

const TeamBox = ({ data }) => {
  return (
    data && (
      <div className="teambox">
        <div className="team-header">
          <div className="team-img"></div>
          <div className="team-title">
            <h4>
              <strong>{data.name}</strong>
            </h4>
            <p>Employee ID: {data.id}</p>
          </div>
          <div className="icons">
            <GoPencil size={30} />
            <GoX size={35} />
          </div>
        </div>
        <div className="team-details">
          <p>Birthdate: {data.birthdate}</p>
          <p>Address: {data.address}</p>
          <p>Status: {data.status}</p>
          <p>Position: {data.position}</p>
          <p>Created: {data.created}</p>
          <p>Updated: {data.updated}</p>
        </div>
      </div>
    )
  );
};

export default TeamBox;
