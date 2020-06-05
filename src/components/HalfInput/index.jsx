import React from 'react'
import './style.css'

const HalfInput = ({name}) => {
  return (
    <div className="half-main">
      <p>{name} : </p>
      <input className="half-body" />
    </div>
  )
}


export default HalfInput



