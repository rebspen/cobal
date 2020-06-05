import React, {useState} from "react";
import "./style.css";
import { GoPencil, GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import TeamBoxEdit from '../TeamBoxEdit'

const TeamBox = ({ data, updatePerson, deletePerson }) => {
  const [editMode, setEditMode] = useState(false)

  // const updatePerson = async (tag, value) => {
  //   await setPerson((prevState) => ({
  //     ...prevState,
  //     [tag]: value,
  //   }));
  // };

  const leaveEditMode = () =>{
    setEditMode(false)
  }

  return (
    data && !editMode ? (
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
           <button className="hidden" onClick={()=> setEditMode(true)}><GoPencil size={30} /></button> 
            <button className="hidden" onClick={()=> deletePerson(data)}><GoX size={35} /></button>
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
    ) : <TeamBoxEdit data={data} leaveEditMode={leaveEditMode} updatePerson={updatePerson} />
  );
};

export default TeamBox;
