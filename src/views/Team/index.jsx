import React, {Fragment} from 'react'
import TeamBox from '../../components/TeamBox'
import Nav from "../../components/Nav"
import './style.css'

const Team = ({team, updatePerson, deletePerson}) => {
  return team && (
    <Fragment>
     <Nav button={true} colour={"#5851ea"} />
    <div className="team">
      <h1>Team</h1>
      <div className="team-list">
      {team.map(val => {
        return <TeamBox data={val} updatePerson={updatePerson} deletePerson={deletePerson}/>
      })}
      </div>
    </div>
    </Fragment>
  )
}


export default Team


