import React from "react"
import styled from "styled-components"

// Components
import Layout, {layoutDims} from "../Layout/Layout.js"

const headerAndFooterHeights = `
  ${layoutDims.runnerWidthCssStr} *
  ${layoutDims.headerImgAR} *
  ${layoutDims.overlayedHeaderHeightPerc}
  + ${layoutDims.runnerWidthCssStr} * ${layoutDims.footerImgAR}`

const FlexContainer = styled.div`
  height: calc( 100vh - (${headerAndFooterHeights}) );
`

const RsvpMain = () => {
  return(
    <FlexContainer>
      <p>Test</p>
    </FlexContainer>
  );
}

export default RsvpMain;