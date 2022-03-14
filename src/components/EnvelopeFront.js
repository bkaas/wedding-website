import React from "react"
import styled from "styled-components"

import stampPic from "../images/beautifulCouple.jpg"
import mapleLeaf from "../images/mapleLeafTransparent.png"

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
  font-family: "Brush Script MT", cursive;
  font-size: 2em;
  margin: 5%;
  white-space: pre-line;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

// Wrapper to allow putting the maple leaf in the stamp image
const StampWrapper = styled.div`
  position: absolute;
  display: block;
  right: 5%;
  top: 5%;
  width: 20%;
  height: auto;
`;

const Stamp = styled.img`
  width: 100%;
  height: auto;

  /* Fun Border */
  background-image: radial-gradient(#bbb 50%, ${({color}) => color} 50%);
  background-repeat: repeat;
  background-position: 8px 0px;
  background-size: 8px 7.3px;

  /* Spacing */
  padding: 4px;
`;

const MapleLeaf = styled.img`
  position: absolute;
  top: 11%;
  left: 8%;
  width: 30%;
  height: auto;

  background-color: transparent;
`;

const EnvelopeFront = ({className, name, color}) => {

  return(

    <StyledEnvelopeFront className={className}>

      <Names> {name} </Names>

      <StampWrapper>
        <Stamp src={stampPic} alt="Picture of the beautiful couple" color={color} />
        <MapleLeaf src={mapleLeaf} alt="Picture of a maple leaf" />
      </StampWrapper>

    </StyledEnvelopeFront>

  );

}

export default EnvelopeFront;