import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

// Components
import FlexSpacer from "./FlexSpacer.js"

// Fonts
// import FontStyles from "../../fonts/FontStyles.js"

// Media Queries
import mediaQueries from "../../util/mediaQueries.js"

// Util
import {layoutDims} from "./Layout.js"

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

    if (props.isRsvp) {
      navigate("/rsvp");
    }
    else {

      // The user didn't select RSVP, so they need to be on the
      // home page before it can scroll
      const url = typeof window !== 'undefined' ? window.location.pathname : '';
      console.log(`url: ${url}`);
      if (url !== "/") {
        navigate("/");
      }

      if (props.isHome) {
        window.scroll(0,0);
      }
      else {
        // Scroll to the heading corresponding to the selected heading
        // The top of the page is dynamic based on the viewport width
        // which sets the header image height
        const windowWidth = window.innerWidth // pixels
        const headerHeight = layoutDims.calcTop(windowWidth); // pixels
        const scrollMargin = 1.1;

        // Get the position of the heading
        const rect = props.headingRef.current.getBoundingClientRect();
        // Scroll down to the heading position minus the header height
        // and some empirically determined margin
        window.scrollBy(0, rect.y - headerHeight * scrollMargin);

        // Debug
        // console.log(rect);
        // console.log(`Header height: ${headerHeight}`);
        // console.log(layoutDims);
      }
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
*
* Creates a NavbarFlexContainer with a bunch of NavbarAnchors in it
*/
const Navbar = ({headings}) => {

  // TODO check to make sure the headings object has
  // fields name and link
  const navbarLinks = headings.map(({name, ref}, index) => {

    return(
      <NavbarAnchor
        isHome={name === "Home"}
        isRsvp={name === "RSVP"}
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
