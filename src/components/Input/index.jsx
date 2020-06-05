import React, { useState } from "react";
import "./style.css";

const Input = ({ name, tag, updatePerson }) => {
  const [text, setText] = useState("");

  const handleChange = async (e) => {
    console.log("ETV", e.target.value);
    const val = e.target.value;
    await setText(e.target.value);
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
