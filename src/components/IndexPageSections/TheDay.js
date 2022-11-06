// The Day Component

import React from "react"
import styled from "styled-components"

// Components
import Section from "../Layout/Section.js"

// Util
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

// Image
import mill from "../../images/CambridgeMillPic.jpg"


// const info = `Our wedding day is going to be so amazing.
// The timing breakdown will be all right here!`

const schedule = [
{
  event    : "Wedding Ceremony",
  location : "Cambridge Mill - Pavilion",
  time     : "2:30 pm",
  notes    : "Shuttle Bus - Hotel departure at 1:30 p.m. and 2:00 p.m.",
},
{
  event    : "Cocktail Hour",
  location : "Cambridge Mill - Falls Room Solarium",
  time     : "3:00 pm - 4:30 pm",
},
{
  event    : "Dinner and Dance",
  location : "Cambridge Mill - Falls Room",
  time     : "5:00 pm - 1:00 am",
  notes    : "Shuttle Bus - Venue departure at 11:00 p.m., 12:00 p.m., 12:30 p.m., 1:15 a.m.",
}
]


const StyledScheduleTable = styled.table`
  border: none;
  margin: 1em;
  font-family: "Goudy Old Style", serif;
  font-size: ${fontSizes["content"]};

  ${mediaQueries("content")}

  & td {
    padding: 0.5em;
  }

`;

const TimeData = styled.td`
  text-align: center;
`

const scheduleDisplayList = schedule.map( (value, index) => {

  return(
    <tr key={index}>
      <TimeData>{value.time}</TimeData>
      <td>{value.event} <br/> <em>{value.location}</em> <br/>{value.notes}</td>
    </tr>
  );

});

const StyledImg = styled.img`
  width: 38%;
  margin: 1em;

  @media (max-width: 1000px) {
    width: 75%;
  }
`

const TheDay = (props) => {

  return (
    <Section headingRef={props.headingRef} name={props.headingName}>
      <StyledImg src={mill} alt="Image of the Cambridge Mill" />
      <StyledScheduleTable>
        <tbody>
          {scheduleDisplayList}
        </tbody>
      </StyledScheduleTable>
    </Section>
  )

}

export default TheDay