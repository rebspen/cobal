import React, {useState} from 'react'
import './style.css'

const Input = ({name, tag, updatePerson}) => {
  const [text , setText] = useState("")

  const handleChange = async (e) => {
  await setText(e.target.value);
  updatePerson(tag, text);
  }

  return (
    <div className="input-main">
      <p>{name} : </p>
      <input 
      className="input-body" 
      value={text}
      onChange={(e) => 
      handleChange(e)
      } />
    </div>
  )
}


export default Input



