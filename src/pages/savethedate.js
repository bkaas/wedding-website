import React from "react"
import styled from "styled-components"
import Envelope from "../components/Envelope.js"

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

const EnvelopeBack = styled(Envelope)`
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


const SaveTheDate = () => {

  return (
    <main>
      <title>Save The Date Page</title>
      <h1>Save The Date!</h1>
      <Container>
        <EnvelopeFront />
        <EnvelopeBack />
      </Container>
    </main>
  );

}

export default SaveTheDate