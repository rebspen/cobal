import React, { useState, useEffect } from "react";
import "./style.css";
import { GoPencil, GoX, GoCheck } from "react-icons/go";
import { Link } from "react-router-dom";
import TeamBoxInput from "../TeamBoxInput";


const TeamBoxEdit = ({ data, updatePerson, leaveEditMode }) => {
  const [person, setPerson] = useState(data);
  const [loading, setLoading] = useState(false);

  const updatePersonHere = async (tag, value) => {
    await setPerson((prevState) => ({
      ...prevState,
      [tag]: value,
    }));
  };

  const updatePersonGlobally = async () => {
    console.log("now we are at person", person);
    await updatePerson(person);
    leaveEditMode();
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    setLoading(true)
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', "darwin")
    const res = await fetch(
      'http://api.cloudinary.com/v1_1/dookjtutx/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    await updatePersonHere("image", file.secure_url)
    setLoading(false)
  }

  return (
    person && (
      <div className="edit-teambox">
        <div className="edit-team-header">
          <div className="edit-head-info">
            <button className="edit-image" >
              <div
                className="edit-team-img"
                style={{ backgroundImage: `url(${data.image})`}}
              ></div>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
              />
              {loading && <small>loading...</small>}
            </button>
            <div className="edit-team-title">
              <TeamBoxInput
                name="Name:  "
                tag="name"
                updatePerson={updatePersonHere}
                data={person.name}
              />
              <p>Employee ID: {person.id}</p>
            </div>
          </div>
          <div className="icons">
            <button className="hidden" onClick={() => updatePersonGlobally()}>
              <GoCheck
                color={"#a1a0ae"}
                size={30}
                style={{ marginLeft: "1.5em" }}
              />
            </button>
          </div>
        </div>
        <div className="edit-team-details">
          <TeamBoxInput
            name="Birthdate:  "
            tag="birthdate"
            updatePerson={updatePersonHere}
            data={person.birthdate}
          />
          <TeamBoxInput
            name="Address:  "
            tag="address"
            updatePerson={updatePersonHere}
            data={person.address}
          />
          <TeamBoxInput
            name="Status:  "
            tag="status"
            updatePerson={updatePersonHere}
            data={person.status}
          />
          <TeamBoxInput
            name="Position:  "
            tag="position"
            updatePerson={updatePersonHere}
            data={person.position}
          />
          <TeamBoxInput
            name="Created:  "
            tag="created"
            updatePerson={updatePersonHere}
            data={person.created}
          />
          <TeamBoxInput
            name="Updated:  "
            tag="updated"
            updatePerson={updatePersonHere}
            data={person.updated}
          />
        </div>
      </div>
    )
  );
};

export default TeamBoxEdit;
