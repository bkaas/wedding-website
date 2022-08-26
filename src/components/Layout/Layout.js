import React, { useRef } from "react"
import styled from "styled-components"
import GlobalStyle from "../GlobalStyles.js"
import Navbar from "./Navbar.js"


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
const RunnerContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  z-index: -2;
`;

// White runner (reduced width) to hold the content
const Runner = styled.div`
  max-width: 90%;
  min-width: 210px;
  background-color: white;
  flex: 1 1 auto;
  z-index: 0;

  @media (max-width: 640px) {
    /* Placeholder */
  }
`;

const HeaderContainer = styled.header`
  position: sticky;
  top: -15%;
  // border: 1px solid black;
`

const RunnerHeader = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
`;

const RunnerFooter = styled(RunnerHeader)`
  transform: rotateX(180deg);
`;

const fontSizes = {names: "2.5em", date: "1.75em", info: "2em"};
const fontDownScale = {px768: 0.75, px640: 0.6, px320: 0.45};

const Names = styled.h1`
  text-align: center;
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  width: 100%;
  position: absolute;
  bottom: 31%;

  @media (max-width: 768px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px768"]});
  }

  @media (max-width: 640px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px640"]});
  }

  @media (max-width: 320px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px320"]});
  }
`;

const Layout = ({children, headings}) => {
  return(
    <Background>
      <GlobalStyle />

      <RunnerContainer>
        <Runner>

          <HeaderContainer>
            <RunnerHeader src={headerImg} alt="Nice Flowers" />
            <Names>Brendan & Jacqueline</Names>
            <Navbar headings={headings} />
          </HeaderContainer>

          <main>
            {children}
          </main>

          <RunnerFooter src={footerImg} alt="Nice Flowers" />

        </Runner>
      </RunnerContainer>

    </Background>
  )
}

export default Layout;