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
  await updatePerson(person)
  leaveEditMode()
}

  return (
    person && (
      <div className="teambox">
        <div className="team-header">
          <div className="team-img"></div>
          <div className="team-title">
           <TeamBoxInput name="Name:" tag="name" updatePerson={updatePersonHere} data={person.name}  />
           <TeamBoxInput name="Employee ID:" tag="id" updatePerson={updatePersonHere} data={person.id}  />
          </div>
          <div className="icons">
          <button onClick={()=> updatePersonGlobally()}><GoCheck size={30} /></button>
          </div>
        </div>
        <div className="team-details">
        <TeamBoxInput name="Birthdate: " tag="birthdate" updatePerson={updatePersonHere} data={person.birthdate}  />
        <TeamBoxInput name="Address: " tag="address" updatePerson={updatePersonHere} data={person.address}  />
        <TeamBoxInput name="Status :" tag="status" updatePerson={updatePersonHere} data={person.status}  />
        <TeamBoxInput name="Position:" tag="position" updatePerson={updatePersonHere} data={person.position}  />
        <TeamBoxInput name="Created:" tag="created" updatePerson={updatePersonHere} data={person.created}  />
        <TeamBoxInput name="Updated:" tag="updated" updatePerson={updatePersonHere} data={person.updated}  />
          <p>Updated: {data.updated}</p>
        </div>
      </div>
    )
  );
};

export default TeamBoxEdit;




