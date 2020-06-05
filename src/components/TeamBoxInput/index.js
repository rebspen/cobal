import React, { useState, useEffect } from "react";
import "./style.css";

const TeamBoxInput = ({ name, tag, updatePerson, data }) => {
  const [text, setText] = useState(data);

  const handleChange = async (e) => {
    await setText(e.target.value);
    handleSubmit()
  };

  const handleSubmit = () => {
    updatePerson(tag, text);
  }

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
