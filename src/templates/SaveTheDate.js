import React from "react"
import styled from "styled-components"
import Envelope from "../components/Envelope/Envelope.js"

import siteBackground from "../images/siteBackground_2.png"

// Envelope sizing
const envW = 30; // rem
const envH = envW * 11/15; // rem

// Centre envelope on the screen
const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  min-height: 20rem;
  background-image: url(${siteBackground});
`;

const StyledEnvelope = styled(Envelope)`
  flex: 0 0 ${envH}rem;
`;

const SaveTheDate = ({ pageContext }) => {

  return (
    <StyledMain>
      <title>Save The Date Page</title>
      <StyledEnvelope envW={envW} envH={envH} name={pageContext.name} />
    </StyledMain>
  );

}

export default SaveTheDate