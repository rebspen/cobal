import React from 'react'
import Input from "../../components/Input"
import './style.css'

const AddTeam = (props) => {
  console.log(props)
  return (
    <div className="add-employee">
      <h1>New Employee</h1>
      <div className="employee-form">
      <Input name = "Employee ID" />
      <Input name = "Birthdate" />
      <Input name = "Address" />
      <Input name = "Status" />
      <Input name = "Position" />
      <div className="half-size">
      <Input name = "Created" />
      <Input name = "Updated" />
      </div>
      </div>

    </div>
  )
}


export default AddTeam


