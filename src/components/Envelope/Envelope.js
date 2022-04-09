import React from "react"
import styled, {keyframes} from "styled-components"
import EnvelopeBack from "./EnvelopeBack.js"
import EnvelopeFront from "./EnvelopeFront.js"

// Set animation durations and delays
// Run each animation sequentially, so add the duration
// and delay together to use for the next animation's delay
const sumObj = obj => Object.values(obj).reduce((a, b) => a + b); // add the values of an object
const tEnvAppear = {duration: 2.5, delay: 0.5};
// const tEnvFlip   = {duration:   3, delay: 120}; // debug
const tEnvFlip   = {duration:   3, delay: sumObj(tEnvAppear) + 3}; // Delay longer on the front
const tEnvOpen   = {duration: 2.5, delay: sumObj(tEnvFlip)};
const tCardOpen  = {duration:   5, delay: sumObj(tEnvOpen)};

// Envelope Colour
const color = `HSL(207, 7%, 60%)`;

// Define envelope appearance effect
const envAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  margin: auto;
  // border: 2px solid black;
  filter: drop-shadow(5px 5px 8px rgb(0 0 0 / 0.4));
  opacity: 0;

  animation-name: ${envAppear};
  animation-duration: ${tEnvAppear["duration"]}s;
  animation-delay: ${tEnvAppear["delay"]}s;
  animation-fill-mode: forwards;
`;

// Define envelope rotation
const envFlip = (start) => keyframes`
  from {
    transform: rotateY(${start}deg);
  }

  to {
   transform: rotateY(${180 - start}deg);
  }
`;

const commonRules = `
  position: absolute;
  top: 0;
  backface-visibility: hidden;

  animation-duration: ${tEnvFlip["duration"]}s;
  animation-delay: ${tEnvFlip["delay"]}s;
  animation-fill-mode: forwards;

  /* Debug */
  // transition: transform 0.8s;
`;

const StyledEnvelopeFront = styled(EnvelopeFront)`
  ${commonRules}
  height: 100%;
  width: 100%;
  animation-name: ${envFlip(0)};
  background-color: ${color};

  /* Debug */
  // visibility: hidden;
  // &:hover {
  //   transform: rotateY(180deg);
  // }
`;

const StyledEnvelopeBack = styled(EnvelopeBack)`
  ${commonRules}
  transform: rotateY(180deg);
  animation-name: ${envFlip(180)};

  /* Debug */
  // visibility: hidden;
  // ${StyledEnvelopeFront}:hover + & {
  //   transform: rotateY(0deg);
  // }
`;

const Envelope = ({className, name}) => {

  return (
    <Container id="envelope" className={className}>
      <StyledEnvelopeFront name={name} />
      <StyledEnvelopeBack
        tEnvOpen={tEnvOpen}
        tCardOpen={tCardOpen}
        color={color}
      />
    </Container>
  );

}

export default Envelope;