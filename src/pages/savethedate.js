import React from "react"
import styled from "styled-components"
import Envelope from "../components/Envelope.js"

// Envelope sizing
const envW = 20; // rem
const envH = envW * 11/15; // rem

// Envelope addressees
const name = "Brendan Kaas \nand\n Jacqueline Fossenier";

// Centre envelope on the screen
const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 95vh;
  min-height: 20rem
`;

const StyledEnvelope = styled(Envelope)`
  flex: 0 0 ${envH}rem;
`;

const SaveTheDate = () => {

  return (
    <StyledMain>
      <title>Save The Date Page</title>
      <h1>Save The Date!</h1>
      <StyledEnvelope envW={envW} envH={envH} name={name} />
    </StyledMain>
  );

}

export default SaveTheDate