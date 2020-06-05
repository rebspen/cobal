import React, { useState } from "react";
import "./style.css";

const HalfInput = ({ name, tag, updatePerson }) => {
  const [text, setText] = useState("");

  const handleChange = async (e) => {
    const val = e.target.value
    await setText(e.target.value);
    updatePerson(tag, val);
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
