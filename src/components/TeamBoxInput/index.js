import React, { useState, useEffect } from "react";
import "./style.css";

const TeamBoxInput = ({ name, tag, updatePerson, data }) => {
  const [text, setText] = useState(data);

  useEffect(() => {
    if(tag === "updated"){
      const date = new Date().toLocaleDateString();
      console.log("date", date);
      handleChangeAuto(date);
    }
  }, []);

  const handleChangeAuto = async (foo) => {
    await setText(foo);
    updatePerson(tag, foo);
  };

  const handleChange = async (e) => {
    const val = e.target.value
    await setText(e.target.value);
    updatePerson(tag, val); 
  };

  return (
    <div className="team-input-main">
      <p>{name}</p>
      <input
        className="team-input-body"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TeamBoxInput;
