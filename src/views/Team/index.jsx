import React from 'react'
import TeamBox from '../../components/TeamBox'
import './style.css'

const Team = ({team}) => {
  return team && (
    <div className="team">
      <h1>Team</h1>
      <div className="team-list">
      {team.map(val => {
        return <TeamBox data={val}/>
      })}
      </div>
    </div>
  )
}


export default Team


