import React from "react"
import styled from "styled-components"

// Components
import FlexSpacer from "./FlexSpacer.js"

// Fonts
// import FontStyles from "../../fonts/FontStyles.js"

// Media Queries
import mediaQueries from "../../util/mediaQueries.js"

const NavbarFlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 10%;
  width: 100%;

  & a {
    margin: 1%;
  }

  @media (max-width: 480px) {
    padding: 0;
  }

`;

const NavbarAnchorStyled = styled.a`
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.6em;
  text-decoration: none;
  font-family: "Goudy Old Style", serif;

  ${mediaQueries("date")}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:active {
    text-decoration: underline;
  }

  //Debug
  // border: 1px solid black;

`;

const NavbarAnchor = (props) => {

  function handleClick() {
    if (props.isHome) {
      window.scroll(0,0);
    }
    else {
      // Header image intrinsic aspect ratio 767 x 292
      // Sticky position is 13vw above the top of the page (top: -13vw)
      // The Runner width is 90% of the viewport width (not quite)
      const windowWidth = window.innerWidth // pixels
      const headerHeight = windowWidth * 0.9 * 292/767 - 0.13 * windowWidth; // pixels

      props.headingRef.current.scrollIntoView({behavior: "smooth"});
      window.scroll(0, window.scrollY - headerHeight)
    }
  }

  return (

    <NavbarAnchorStyled onClick={handleClick}>
      {props.children}
    </NavbarAnchorStyled>

  );

}


/**
* Generate a navigation bar for scrolling to headings
* headings -> array of objects with fields: name and link to the heading ids
*/
const Navbar = ({headings}) => {

  // TODO check to make sure the headings object has
  // fields name and link
  const navbarLinks = headings.map(({name, ref}, index) => {
    return(
      <NavbarAnchor
        isHome={name === "Home"}
        headingRef={ref}
        key={index}
      >
        {name}
      </NavbarAnchor>
    )
  })

  return(
    <NavbarFlexContainer>
      {navbarLinks}
    </NavbarFlexContainer>
  )
}

export default Navbar;
