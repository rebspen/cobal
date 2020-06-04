import React from 'react'
import './style.css'

const Input = ({name}) => {
  return (
    <div className="input-main">
      <p>{name} : </p>
      <input className="input-body" />
    </div>
  )
}


export default Input



