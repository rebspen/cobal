import React, { useState, Fragment } from "react";
import Input from "../../components/Input";
import HalfInput from "../../components/HalfInput";
import Button from "../../components/Button";
import "./style.css";
import Nav from "../../components/Nav";

const AddTeam = ({ addPerson, history }) => {
  const [person, setPerson] = useState({ image: "/images/bolcom.png" });

  console.log("history", history);

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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          className="sq-1"
        >
          <g id="el-1" clip-path="url(#clip-el-1)">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="55.404"
              height="55.404"
              transform="translate(30.227 -0.343) rotate(30)"
              opacity="0.54"
              fill="url(#linear-gradient)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          className="sq-2"
        >
          <g id="el-1" clip-path="url(#clip-el-1)">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="55.404"
              height="55.404"
              transform="translate(30.227 -0.343) rotate(30)"
              opacity="0.54"
              fill="url(#linear-gradient)"
            />
          </g>
        </svg> */}
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
