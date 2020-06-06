import React, { useState, Fragment } from "react";
import Input from "../../components/Input";
import HalfInput from "../../components/HalfInput";
import Button from "../../components/Button";
import "./style.css";
import Nav from "../../components/Nav";

const AddTeam = ({ addPerson, history }) => {
  const [person, setPerson] = useState({
    image:
      "https://res.cloudinary.com/dgmvfq29c/image/upload/v1576786827/project-3-ironhack/default_picture_p9h9ls.png",
  });

  console.log("person", person);

  const updatePerson = async (tag, value) => {
    await setPerson((prevState) => ({
      ...prevState,
      [tag]: value,
    }));
  };

  const submit = async () => {
    await addPerson(person);
    history.goBack();
  };

  return (
    <Fragment>
      <Nav button={true} colour={"#5851ea"} />
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
            <HalfInput
              name="Created"
              tag="created"
              updatePerson={updatePerson}
            />
            <HalfInput
              name="Updated"
              tag="updated"
              updatePerson={updatePerson}
            />
          </div>
          <Button onClick={() => submit()} primary>
            Submit
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTeam;
