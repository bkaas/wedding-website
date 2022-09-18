// The Day Component

import React from "react"
import styled from "styled-components"

// Components
import Section from "../Layout/Section.js"

// Util
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

// Image
import mill from "../../images/CambridgeMillPic.jpg"


const headingName = "The Day";

// const info = `Our wedding day is going to be so amazing.
// The timing breakdown will be all right here!`

const schedule = [
{
  event : "Wedding Ceremony",
  location : "Cambridge Mill - Pavilion",
  time  : "2:30 pm",
},
{
  event : "Cocktail Hour",
  location : "Cambridge Mill - Falls Room Solarium",
  time  : "3:00 pm - 4:30 pm",
},
{
  event : "Dinner and Dance",
  location : "Cambridge Mill - Falls Room",
  time  : "5:00 pm - 1:00 am",
}
]

const StyledScheduleList = styled.ul`
  list-style-type: none;
`

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

const ScheduleEntryFlexContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
`

const ScheduleEntry = styled.li`
  flex: 1 1 auto;
`

const TimeData = styled.td`
  text-align: center;
`

const scheduleDisplayList = schedule.map( (value, index) => {

  return(
    <tr key={index}>
      <TimeData>{value.time}</TimeData>
      <td>{value.event} <br/> <em>{value.location}</em></td>
    </tr>
  );

});

const StyledImg = styled.img`
  width: 38%;
  margin: 1em;
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