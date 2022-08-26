// Generic section component
// To hold the main sections of the wedding website page

// Provide the section title, and the ref to the heading element

import React from "react"
import styled from "styled-components"

// Fonts
// import FontStyles from "../fonts/FontStyles.js"

// Media Queries
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

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

  & p {
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-size: ${fontSizes["content"]};
  margin: 0.25em 0;

  ${mediaQueries("content")}
  }
`

const Heading = styled.h2`
  font-family: "Goudy Old Style", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  margin: 0 1em 1em;

  ${mediaQueries("names")}
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