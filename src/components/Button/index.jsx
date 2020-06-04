import React from 'react'
import styled from "styled-components"

export default styled.button`
background-color: ${props => (props.primary? "#5851ea" : "white") };
border: none;
border-radius: 90px;
padding: ${props => (props.primary? "0.9em 2.7em" : "1.5em 6em" ) };
color: ${props => (props.primary? "white" : "#5851ea")};
`



