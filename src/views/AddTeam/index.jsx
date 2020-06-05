import React, { useState } from "react";
import Input from "../../components/Input";
import HalfInput from "../../components/HalfInput";
import Button from "../../components/Button";
import "./style.css";

const AddTeam = ({ addPerson }) => {
  const [person, setPerson] = useState({image: "/images/bolcom.png"});

  const updatePerson = async (tag, value) => {
    await setPerson((prevState) => ({
      ...prevState,
      [tag]: value,
    }));
  };

  return (
    <div className="add-employee">
      <h1>New Employee</h1>
      <div className="employee-form">
        <Input name="Employee ID" tag="id" updatePerson={updatePerson} />
        <Input name="Name" tag="name" updatePerson={updatePerson} />
        <Input name="Birthdate" tag="birthdate" updatePerson={updatePerson} />
        <Input name="Address" tag="address" updatePerson={updatePerson} />
        <Input name="Status" tag="status" updatePerson={updatePerson} />
        <Input name="Position" tag="position" updatePerson={updatePerson} />
        <div className="half-size">
          <HalfInput name="Created" tag="created" updatePerson={updatePerson} />
          <HalfInput name="Updated" tag="updated" updatePerson={updatePerson} />
        </div>
        <Button onClick={() => addPerson(person)} primary>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddTeam;
