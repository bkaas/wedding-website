import React from "react"
import styled from "styled-components"
import GlobalStyle from "../GlobalStyles.js"

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
  max-width: 500px;
  background-color: white;
`;

const Layout = ({children}) => {
  return(
    <Background>
      <GlobalStyle />
      <StyledMain>
        <Runner>
          {children}
        </Runner>
      </StyledMain>
    </Background>
  )
}

export default Layout;