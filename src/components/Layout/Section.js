// Generic section component
// To hold the main sections of the wedding website page

// Provide the section title, and the ref to the heading element

import React from "react"
import styled from "styled-components"

// Fonts
// import FontStyles from "../fonts/FontStyles.js"

const SectionWrapper = styled.div`
  margin: 5em 1em;
`

const SectionContentContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 1em;

  & * {
    margin: 1em;
  }
`

const Heading = styled.h2`
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: 2.5em;
  margin: 0 1em 1em;
`;

const Section = (props) => {

  return (
    <SectionWrapper>
      <Heading ref={props.headingRef}>{props.name}</Heading>
      <SectionContentContainer>
        {props.children}
      </SectionContentContainer>
    </SectionWrapper>
  )
}

export default Section