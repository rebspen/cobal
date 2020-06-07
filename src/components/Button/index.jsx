import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => (props.primary ? "#5851ea" : "white")};
  border: none;
  outline: none;
  border-radius: 90px;
  padding: ${(props) => (props.small ? "0.8em 2.7em" : "1.5em 6em")};
  color: ${(props) => (props.primary ? "white" : "#5851ea")};
  -webkit-box-shadow: ${(props) => (props.primary ? "0px 21px 27px -5px rgba(209,209,209,1)" : "none")};
  -moz-box-shadow:${(props) => (props.primary ? '0px 21px 27px -5px rgba(209,209,209,1)': "none")};
  box-shadow:${(props) => (props.primary ? '0px 21px 27px -5px rgba(209,209,209,1)': "none")};
`;
