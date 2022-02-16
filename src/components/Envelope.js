import React from "react"
import styled from "styled-components"
import EnvelopeBack from "../components/EnvelopeBack.js"
import EnvelopeFront from "../components/EnvelopeFront.js"

const Container = styled.div`
  position: relative;
  height: ${({envH}) => envH}rem;
  width: ${({envW}) => envW}rem;
  // max-width: 80vw;
  margin: auto;
  // border: 2px solid black;
  filter: drop-shadow(5px 5px 8px rgb(0 0 0 / 0.4));
`;

const commonRules = `
  position: absolute;
  top: 0;
  transition: transform 0.8s;
  backface-visibility: hidden;
`;

const StyledEnvelopeFront = styled(EnvelopeFront)`
  ${commonRules}

  height: 100%;
  width: 100%;

  &:hover {
    transform: rotateY(180deg);
  }

  /* Debug */
  // visibility: hidden;
`;

const StyledEnvelopeBack = styled(EnvelopeBack)`
  ${commonRules}

  transform: rotateY(180deg);

  ${StyledEnvelopeFront}:hover + & {
    transform: rotateY(0deg);
  }

  /* Debug */
  // visibility: hidden;
`;

const Envelope = ({className, envW, envH, name}) => {

  return (
    <Container envW={envW} envH={envH} className={className}>
      <StyledEnvelopeFront name={name}/>
      <StyledEnvelopeBack envW={envW} envH={envH}/>
    </Container>
  );

}

export default Envelope;