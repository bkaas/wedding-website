import React from "react"
import styled from "styled-components"

// Fonts
import FontStyles from "../../fonts/FontStyles.js"

const NavbarFlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 15%;
  position: absolute;
  bottom: 12%;
  width: 100%
`;

const NavbarAnchorStyled = styled.a`
  flex: 1 1 20%;
  text-align: center;
  font-size: 1.6em;
  text-decoration: none;
  font-family: "Goudy Old Style", serif;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:active {
    text-decoration: underline;
  }

`;

const NavbarAnchor = (props) => {

  function handleClick() {
    if (props.isHome) {
      window.scroll(0,0);
    }
    else {
      props.headingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.scroll(0, window.scrollY - 200)
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
