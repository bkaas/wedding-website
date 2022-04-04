import React from "react"
import styled from "styled-components"
import Envelope from "../components/Envelope/Envelope.js"
import GlobalStyle from "../components/GlobalStyles.js"

import siteBackground from "../images/siteBackground_2.png"

// Envelope sizing
const aspectRatio = 11/15;
const envW = 30; // rem
const envH = envW * aspectRatio;

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

  /* Ensure the card does not exceed the viewport height */
  /* 1.5x is the card growth after it exits the envelope */
  max-width: calc(95vh / 1.5);
  max-height: calc(95vh / 1.5 * ${aspectRatio});

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
      <title>Brendan and Jacqueline's Save the Date</title>
      <StyledEnvelope name={pageContext.name} />
    </StyledMain>
  );

}

export default SaveTheDate