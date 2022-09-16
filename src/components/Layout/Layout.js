import React from "react"
import styled from "styled-components"

// Components
import GlobalStyle from "../GlobalStyles.js"
import Navbar from "./Navbar.js"
import FlexSpacer from "./FlexSpacer.js"

// Media Queries
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

// Header / footer images
import headerImg from "../../images/RunnerHeader001.png"
import footerImg from "../../images/RunnerFooter001.png"

import siteBackground from "../../images/siteBackground_2.png"

// Textured grey brackground
const Background = styled.div`
  background-image: url(${siteBackground});
  z-index: -3;
`;

// Flex container to center the runner
const RunnerFlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  z-index: -2;
`;


// Setting the max-width to 85vw because the vertical scrollbar reduces
// the width of the parent container, so setting the width as a
// percentage will change depending on whether the vertical scrollbar
// is present
const runnerWidth = `85vw`;
const maxRunnerWidth = `1500px`;
const minRunnerWidth = `210px`;
const currentRunnerWidth = `max( min(${runnerWidth}, ${maxRunnerWidth}) , ${minRunnerWidth} )`;

// White runner (reduced width) to hold the content
const Runner = styled.div`
  // width: ${runnerWidth};
  max-width: ${maxRunnerWidth};
  min-width: ${minRunnerWidth};
  background-color: white;
  flex: 0 0 ${runnerWidth};
  z-index: 0;

  @media (max-width: 640px) {
    /* Placeholder */
  }
`;

// Hardcode the header image aspect ratio (could we detect it?)
// So we can set the header container height
// Since the header image is position: absolute, the div won't
// automatically set its height based on the image's height
const headerImgAR = 292 / 767;
const headerImgH = `${currentRunnerWidth} * ${headerImgAR}`;

// Set the scroll stop position (sticky top)
// Half the header image height with some margin
const stickyTop = `${headerImgH} * -0.4`;

//
const HeaderContainer = styled.header`
  position: sticky;
  top: calc( ${stickyTop} );
  width: 100%;
  height: calc( ${headerImgH} );
`

// Need to use an img element because setting the background-image
// for a div doesn't allow you to set the aspect ratio of the image
// to set the height unless you use the padding-top trick which
// requires a height of 0 and makes it difficult to work with
// content in the div.
// Using absolute positioning to take the img element out of the
// flow of the document.
const HeaderImg = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;
`;

// Flex div for the header content
// Essentially overlayed on top of the parent div
// Required because I want the header img to be independent
// of the justify-content property of the parent flexbox
const HeaderInfoFlexDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const RunnerFooter = styled.img`
  transform: rotateX(180deg);
  width: 100%;
  height: auto;
  z-index: -1;
`;

const Names = styled.h1`
  text-align: center;
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  width: auto;
  background-color: rgba(255, 255, 255, 0.5);

  ${mediaQueries("names")}
`;

const Layout = ({children, headings}) => {
  return(
    <Background>
      <GlobalStyle />

      <RunnerFlexContainer>
        <FlexSpacer grow="1" shrink="1" basis="auto"/>
        <Runner>

          <HeaderContainer>
            <HeaderImg src={headerImg} alt="Nice Flowers" />
            <HeaderInfoFlexDiv>
              <FlexSpacer grow="0" shrink="0" basis="46%"/>
              <Names>Brendan & Jacqueline</Names>
              <FlexSpacer grow="1" shrink="1" />
              <Navbar headings={headings} />
              <FlexSpacer grow="1" shrink="1" />
            </HeaderInfoFlexDiv>
          </HeaderContainer>

          <main>
            {children}
          </main>

          <RunnerFooter src={footerImg} alt="Nice Flowers" />

        </Runner>
        <FlexSpacer grow="1" shrink="1" basis="auto"/>
      </RunnerFlexContainer>

    </Background>
  )
}

export default Layout;