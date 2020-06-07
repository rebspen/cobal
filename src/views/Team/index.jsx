import React, {Fragment} from 'react'
import TeamBox from '../../components/TeamBox'
import Nav from "../../components/Nav"
import './style.css'

const Team = ({team, updatePerson, deletePerson}) => {
  return team && (
    <Fragment>
     <Nav button={true} colour={"#5851ea"} />
    <div className="team">
    <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          className="sq-1"
        >
          <defs>
            <linearGradient
              id="linear-gradient2"
              x1="0.5"
              y1="1.008"
              x2="0.5"
              y2="0.064"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#25dcf1" />
              <stop offset="0.086" stop-color="#1ebfe9" />
              <stop offset="0.233" stop-color="#1595df" />
              <stop offset="0.382" stop-color="#0d71d6" />
              <stop offset="0.533" stop-color="#0756cf" />
              <stop offset="0.685" stop-color="#0343ca" />
              <stop offset="0.839" stop-color="#0037c7" />
              <stop offset="1" stop-color="#0034c7" />
            </linearGradient>
            <clipPath id="clip-el-1">
              <rect width="78" height="77" />
            </clipPath>
          </defs>
          <g id="el-1" clip-path="url(#clip-el-1)">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="55.404"
              height="55.404"
              transform="translate(30.227 -0.343) rotate(30)"
              opacity="0.54"
              fill="url(#linear-gradient2)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          className="sq-2"
        >
          <g id="el-1" clip-path="url(#clip-el-1)">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="55.404"
              height="55.404"
              transform="translate(30.227 -0.343) rotate(30)"
              opacity="0.54"
              fill="url(#linear-gradient2)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="77"
          viewBox="0 0 78 77"
          className="sq-3"
        >
          <g id="el-1" clip-path="url(#clip-el-1)">
            <rect
              id="Retângulo_12"
              data-name="Retângulo 12"
              width="55.404"
              height="55.404"
              transform="translate(30.227 -0.343) rotate(30)"
              opacity="0.54"
              fill="#feafcb"
            />
          </g>
        </svg>
      <h1>Team</h1>
      <div className="team-list">
      {team.map(val => {
        return <TeamBox key={val.id} data={val} updatePerson={updatePerson} deletePerson={deletePerson}/>
      })}
      </div>
    </div>
    </Fragment>
  )
}


export default Team


