import React, { useState, useEffect } from "react";
import "./style.css";

const Input = ({ name, tag, updatePerson }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    // automatically adds a template id for the team member
    if (tag === "id") {
      const num = Math.floor(Math.random() * 100000000);
      handleChangeAuto(num.toString())
    }
  }, []);

  const handleChangeAuto = async (foo) => {
    await setText(foo);
    updatePerson(tag, foo);
  };

  const handleChange = async (e) => {
    const val = e.target.value;
    await setText(e.target.value);
    //this updates the main person local state property in addTeam view
    updatePerson(tag, val);
  };

  return (
    <div className="input-main">
      <p>{name} : </p>
      <input
        className="input-body"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
