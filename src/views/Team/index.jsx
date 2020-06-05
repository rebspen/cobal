import React from 'react'
import TeamBox from '../../components/TeamBox'
import './style.css'

const Team = ({team, updatePerson, deletePerson}) => {
  return team && (
    <div className="team">
      <h1>Team</h1>
      <div className="team-list">
      {team.map(val => {
        return <TeamBox data={val} updatePerson={updatePerson} deletePerson={deletePerson}/>
      })}
      </div>
    </div>
  )
}


export default Team


