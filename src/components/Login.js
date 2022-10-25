// Ref: https://www.gatsbyjs.com/tutorial/authentication-tutorial/

import React from "react"
import styled from "styled-components"

// Media Queries
import mediaQueries, {fontSizes} from "../util/mediaQueries.js"

const LoginFormOuterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const LoginFormDiv = styled.div`
  margin: 10%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & * {
    display: block;
  }
`

const LoginTextInput = styled.input`
  margin: 0.5em 0;
  padding: 0.5em;
  width: 100%;
  border-radius: 7px;
  border: 1px solid #bbb;
  color: #313438;
  font-size: 0.8em;
  ${mediaQueries("", undefined, "0.8em")};

  &:focus {
    outline: none;
    border: 1px solid #556673;
  }

  &::placeholder {
    font-style: italic;
  }
`

const SubmitButton = styled.input`
  margin: auto;
  border: 1px solid #999;
  border-radius: 7px;
  padding: 0.5em 1em;
  font-family: "Goudy Old Style", serif;
  font-size: 1em;
  ${mediaQueries("", undefined, "1em")};
  cursor: pointer;

  &:active {
    border-width: 2px 0 0 2px;
    transform: translateY(2px);
  }

  &:hover {
    background-color: #ddd;
  }
`

const GuestNameLabel = styled.label`
  font-size: 1em;
  ${mediaQueries("", undefined, "1em")};
`

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guestName: ``,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLogin(this.state.guestName);
  }

  render() {

    return (
      <LoginFormOuterDiv>
        <LoginFormDiv>
          <form
            method="post"
            onSubmit={this.handleSubmit}
          >
            <GuestNameLabel htmlFor="guestName">
              Please enter your name or the name of someone in your party
            </GuestNameLabel>
            <LoginTextInput
              name="guestName"
              id="guestName"
              onChange={this.handleUpdate}
            />
            <SubmitButton type="submit" value="Submit" />
          </form>
        </LoginFormDiv>
        </LoginFormOuterDiv>
    )
  }
}