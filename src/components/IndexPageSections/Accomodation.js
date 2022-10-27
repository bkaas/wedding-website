// The Day Component

import React from "react"
import styled from "styled-components"

// Components
import Section from "../Layout/Section.js"

// Util
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

const headingName = "Accommodations";

const HotelPhone = <a href="tel:1-866-622-1505">1-866-622-1505</a>;
const HotelEmail = <a href="mailto:res@Cambridgehotel.ca">res@Cambridgehotel.ca</a>;


const info = `A block of hotel rooms are reserved under
  at the Cambridge Hotel and Conference Centre at a
  discounted rate. To reservse a room, please contact ${HotelPhone}`;


const StyledInfoContainer = styled.div`
  max-width: 40%;

  & p {
    // text-align: center;
    font-family: "Goudy Old Style", serif;
    font-size: ${fontSizes["content"]};
    // margin: 0.25em 0;

    ${mediaQueries("content")}
  }

  // & a {
  //   font-size: ${fontSizes["content"]};
  //   ${mediaQueries("content")}
  // }
`

const StyledIframe = styled.iframe`
  border: none;
  width: 40%;
  height: 31vw;
  margin: 1em
`;


/*
Commented out the content for now:
          A block of hotel rooms are reserved at the
          Cambridge Hotel and Conference Centre at a
          discounted rate.
          To reserve a room, please contact the hotel at
          {HotelPhone} or email {HotelEmail} and quote the
          following group name: "Fossenier & Kaas Wedding"
          Note about block expiry
*/

const Accomodation = (props) => {

  return (
    <Section headingRef={props.headingRef} name={headingName}>
      <StyledInfoContainer>
        <p>
          Accomodations information coming very soon!
        </p>
      </StyledInfoContainer>
      <StyledIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.454802309356!2d-80.33111398410675!3d43.40932357618367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b89ae1882310f%3A0x8ec78be14ba61339!2sCambridge%20Hotel%20and%20Conference%20Centre!5e0!3m2!1sen!2sca!4v1661539311386!5m2!1sen!2sca"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </StyledIframe>
    </Section>
  )

}

export default Accomodation