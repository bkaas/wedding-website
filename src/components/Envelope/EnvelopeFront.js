import React from "react"
import styled from "styled-components"

import FontStyles from "../../fonts/FontStyles.js"

import stampPic from "../../images/stampSmall.png"

// const text = "Brendan and Jacqueline";

const StyledEnvelopeFront = styled.div`
  // background-color: green;
  // display: flex;
  // flex-flow: column wrap;
  // justify-content: center;
  position: relative;
`;

const Names = styled.p`
  text-align: center;
  font-family: "Pinyon Script", "Brush Script MT", cursive;
  font-weight: bold;
  font-size: 2em;
  margin: 5%;
  white-space: pre-line;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: black;

  @media (max-width: 640px) {
    font-size: 1.6em;
  }
`;

const Stamp = styled.img`
  position: absolute;
  display: block;
  right: 4%;
  top: 5%;
  width: 20%;
  height: auto;
`;

const EnvelopeFront = ({className, name}) => {

  return(

    <StyledEnvelopeFront className={className}>

      <FontStyles />

      <Names> {name} </Names>

      <Stamp src={stampPic} alt="Stamp with an image of the beautiful couple" />

    </StyledEnvelopeFront>

  );

}

export default EnvelopeFront;