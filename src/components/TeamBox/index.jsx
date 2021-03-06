import React, {useState} from "react";
import "./style.css";
import { GoPencil, GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import TeamBoxEdit from '../TeamBoxEdit'

const TeamBox = ({ data, updatePerson, deletePerson }) => {
  const [editMode, setEditMode] = useState(false)

  const leaveEditMode = () =>{
    setEditMode(false)
  }

//if edit mode is false it will render the below component else TeamBoxEdit component

  return (
    data && !editMode ? (
      <div className="teambox">
        <div className="team-header">
        <div className="head-info">
          <div className="team-img" style={{backgroundImage: `url(${data.image})`}}></div>
          <div className="team-title">
            <h4 className= "name">
              <strong>{data.name}</strong>
            </h4>
            <p>Employee ID: {data.id}</p>
          </div>
        </div>
          <div className="icons">
           <button className="hidden" onClick={()=> setEditMode(true)}><GoPencil size={20} color={"#a1a0ae"} style={{marginTop: "3px", marginLeft:"-10px"}} /></button> 
            <button className="hidden" onClick={()=> deletePerson(data)}><GoX size={25}  color={"#a1a0ae"} style={{marginLeft:"-13px"}} /></button>
          </div>
        </div>
        <div className="team-details">
          <p>Birthdate: <span>{data.birthdate}</span></p>
          <p>Address: <span>{data.address}</span></p>
          <p>Status: <span>{data.status}</span></p>
          <p>Position: <span>{data.position}</span></p>
          <p>Created: <span>{data.created}</span></p>
          <p>Updated: <span>{data.updated}</span></p>
        </div>
      </div>
    ) : <TeamBoxEdit data={data} leaveEditMode={leaveEditMode} updatePerson={updatePerson} />
  );
};

export default TeamBox;
