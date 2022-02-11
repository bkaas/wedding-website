import React from "react"
import styled from "styled-components"
import EnvelopeBack from "../components/EnvelopeBack.js"

// Envelope sizing
const envW = 15; // rem
const envH = envW * 11/15; // rem

const Container = styled.div`
  position: relative;
  height: ${envH}rem;
  width: ${envW}rem;
  margin: auto;
  // border: 2px solid black;
`;

const EnvelopeFront = styled.div`
  background-color: green;
  height: ${envH}rem;
  width: ${envW}rem;
  margin: auto;

  position: absolute;
  top: 0;

  backface-visibility: hidden;
  transition: transform 0.8s;

  &:hover {
    transform: rotateY(180deg);
  }
  // visibility: hidden;
`;

const StyledEnvelopeBack = styled(EnvelopeBack)`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  // visibility: hidden;

  position: absolute;
  top: 0;

  transition: transform 0.8s;

  ${EnvelopeFront}:hover + & {
    transform: rotateY(0deg);
  }

`;

const Envelope = () => {

  return (
    <Container>
      <EnvelopeFront />
      <StyledEnvelopeBack envW={envW} envH={envH}/>
    </Container>
  );

}

export default Envelope;