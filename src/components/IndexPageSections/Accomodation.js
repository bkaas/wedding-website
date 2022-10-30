// The Day Component

import React from "react"
import styled from "styled-components"

// Components
import Section from "../Layout/Section.js"

// Util
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

const headingName = "Accommodations";

const CambridgeHotelPhone = <a href="tel:1-866-622-1505">1-866-622-1505</a>;
const CambridgeHotelEmail = <a href="mailto:res@Cambridgehotel.ca">res@Cambridgehotel.ca</a>;
const HiltonWebsite = <a href="https://group.hiltongardeninn.com/sr4yhw">booking link</a>
const HiltonPhone = <a href="tel:519-620-8936">519-620-8936</a>;

const StyledInfoContainer = styled.div`
  // max-width: 40%;
  margin-left: 2%;
  margin-bottom: 2%;

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

const StyledParagraph = styled.p`
  line-height: 1.3;
`

const LineBreak = styled.span`
  display: block;
  margin-bottom: 1em;
`
const IndentedText = styled.span`
  display: block;
  margin-left: 3%;
`

// Hotel header
const hotelHeader = `We have reserved a block of rooms with preferred
rates at two hotels in close proximity to each other (200m). A shuttle
bus will transport guests from each hotel to the Cambridge Mill for
the wedding ceremony, and back to each hotel at the end of the evening.
Please see the above section for shuttle times.`;

const blockExpiry = `Please note the hotel blocks and their preferred
rates will only be held until January 24th, 2023.`;



// Shuttle times
// 11, 12, 1230, 115

const Accomodation = (props) => {

  return (
    <Section headingRef={props.headingRef} name={headingName}>
      <StyledInfoContainer>
        <StyledParagraph>
          {hotelHeader}
          <br />
          {blockExpiry}
          <LineBreak/>
          Cambridge Hotel and Conference Centre
          <LineBreak/>
          <IndentedText>
            Reservations can be made by contacting the hotel by phone
            at {CambridgeHotelPhone} or email {CambridgeHotelEmail} and
            quoting the following group name: "Fossenier & Kaas Wedding"
          </IndentedText>
          <LineBreak/>
          Hilton Garden Inn
          <LineBreak/>
          <IndentedText>
            Reservations can be made through the {HiltonWebsite} or by phone
            at {HiltonPhone} and quoting the following group name: "Fossenier
            Kaas Wedding"
          </IndentedText>
        </StyledParagraph>
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