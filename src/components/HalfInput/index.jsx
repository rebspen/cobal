import React, { useState } from "react";
import "./style.css";

const HalfInput = ({ name, tag, updatePerson }) => {
  const [text, setText] = useState("");

  const handleChange = async (e) => {
    await setText(e.target.value);
    updatePerson(tag, text);
  };

  return (
    <div className="half-main">
      <p>{name} : </p>
      <input
        className="half-body"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default HalfInput;
