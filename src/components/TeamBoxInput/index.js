import React, { useState, useEffect } from "react";
import "./style.css";

const TeamBoxInput = ({ name, tag, updatePerson, data }) => {
  const [text, setText] = useState(data);

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
