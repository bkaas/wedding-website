import React from "react"
import styled from "styled-components"

// Generates a styled div component with customizable css properties:
// flex-grow
// flex-shrink
// flex-basis

// Usage:
// <FlexSpacer grow="1" shrink="1" basis="auto"/>

// Defaults are:
// flex: 0 0 auto

const FlexSpacer = styled.div`
  flex-grow: ${props => props.hasOwnProperty("grow") ? props.grow : 0};
  flex-shrink: ${props => props.hasOwnProperty("shrink") ? props.shrink : 0};
  flex-basis: ${props => props.hasOwnProperty("basis") ? props.basis : "auto"};
`;

export default FlexSpacer;