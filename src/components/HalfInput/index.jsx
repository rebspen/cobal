import React, { useState, useEffect } from "react";
import "./style.css";

// this is used in the botton of the add employee form for created and edited 

const HalfInput = ({ name, tag, updatePerson }) => {
  const [text, setText] = useState("");
  
  useEffect(() => {
    //automatically adds the dates to the form and updates the state
    const date = new Date().toLocaleDateString();
    handleChangeAuto(date);
  }, []);

  const handleChange = async (e) => {
    const val = e.target.value;
    await setText(e.target.value);
    updatePerson(tag, val);
  };


  const handleChangeAuto = async (foo) => {
    await setText(foo);
    updatePerson(tag, foo);
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
