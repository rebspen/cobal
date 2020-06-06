import React, {useState, useEffect} from "react";
import "./style.css";
import { GoPencil, GoX, GoCheck } from "react-icons/go";
import { Link } from "react-router-dom";
import TeamBoxInput from "../TeamBoxInput"


const TeamBoxEdit = ({ data, updatePerson, leaveEditMode}) => {
  const [person, setPerson] = useState(data);
 

  const updatePersonHere = async (tag, value) => {
    await setPerson((prevState) => ({
      ...prevState,
      [tag]: value,
    }));
  };

const updatePersonGlobally = async () => {
  console.log("now we are at person", person)
  await updatePerson(person)
  leaveEditMode()
}

  return (
    person && (
      <div className="edit-teambox">
        <div className="edit-team-header">
        <div className="edit-head-info">
          <div className="edit-team-img"></div>
          <div className="edit-team-title">
           <TeamBoxInput name="Name:  " tag="name" updatePerson={updatePersonHere} data={person.name}  />
           <p>Employee ID: {person.id}</p>
          </div>
        </div>
          <div className="icons">
          <button className="hidden" onClick={()=> updatePersonGlobally()}><GoCheck color={"#a1a0ae"}  size={30} /></button>
          </div>
        </div>
        <div className="edit-team-details">
        <TeamBoxInput name="Birthdate:  " tag="birthdate" updatePerson={updatePersonHere} data={person.birthdate}  />
        <TeamBoxInput name="Address:  " tag="address" updatePerson={updatePersonHere} data={person.address}  />
        <TeamBoxInput name="Status:  " tag="status" updatePerson={updatePersonHere} data={person.status}  />
        <TeamBoxInput name="Position:  " tag="position" updatePerson={updatePersonHere} data={person.position}  />
        <TeamBoxInput name="Created:  " tag="created" updatePerson={updatePersonHere} data={person.created}  />
        <TeamBoxInput name="Updated:  " tag="updated" updatePerson={updatePersonHere} data={person.updated}  />
        </div>
      </div>
    )
  );
};

export default TeamBoxEdit;




