import React from "react"
import styled from "styled-components"
import GlobalStyle from "../GlobalStyles.js"

// Header / footer images
import headerImg from "../../images/RunnerHeader001.png"
import footerImg from "../../images/RunnerFooter001.png"

import siteBackground from "../../images/siteBackground_2.png"

const Background = styled.div`
  background-image: url(${siteBackground});
`;

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Runner = styled.div`
  max-width: 80%;
  min-width: 250px;
  background-color: white;
  flex: 1 1 auto;

  @media (max-width: 640px) {
    /* Placeholder */
  }
`;

const RunnerHeader = styled.img`
  width: 100%;
  height: auto;
`;

const RunnerFooter = styled(RunnerHeader)`
  transform: rotateX(180deg);
`;

const Layout = ({children}) => {
  return(
    <Background>
      <GlobalStyle />
      <StyledMain>
        <Runner>
          <RunnerHeader src={headerImg} alt="Nice Flowers" />
            {children}
          <RunnerFooter src={footerImg} alt="Nice Flowers" />
        </Runner>
      </StyledMain>
    </Background>
  )
}

export default Layout;