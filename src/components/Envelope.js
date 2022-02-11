import React from "react"
import styled from "styled-components"
import EnvelopeBack from "../components/EnvelopeBack.js"


const Container = styled.div`
  position: relative;
  height: 11rem;
  width: 15rem;
  margin: auto;
  // border: 2px solid black;
`;

const EnvelopeFront = styled.div`
  background-color: green;
  height: 11rem;
  width: 15rem;
  margin: auto;

  position: absolute;
  top: 0;

  backface-visibility: hidden;
  transition: transform 0.8s;

  &:hover {
    transform: rotateY(180deg);
  }
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
      <StyledEnvelopeBack />
    </Container>
  );

}

export default Envelope;