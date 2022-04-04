import React from "react"
import styled from "styled-components"
import Envelope from "../components/Envelope/Envelope.js"
import GlobalStyle from "../components/GlobalStyles.js"

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
  flex: 0 0 auto;
  width: ${envW}rem;
  height: ${envH}rem;

  @media (max-width: 768px) {
    /* Placeholder */
  }

  @media (max-width: 640px) {
    width: ${envW / 1.5}rem;
    height: ${envH / 1.5}rem;
  }

`;

const SaveTheDate = ({ pageContext }) => {

  return (
    <StyledMain>
      <GlobalStyle />
      <title>Save The Date Page</title>
      <StyledEnvelope name={pageContext.name} />
    </StyledMain>
  );

}

export default SaveTheDate