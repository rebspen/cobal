import React from 'react'
import './style.css'



const Nav = () => {
  return (
<div className="nav">

  <input type="checkbox" id="nav-check"/>

  <div className="nav-header">
    <div className="nav-title">
      <img className="branding" src = "./logo.png" alt= ""/>
    </div>
  </div>

  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Home</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Absences</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Employees</a>
  </div>

</div>

  )
}


export default Nav


