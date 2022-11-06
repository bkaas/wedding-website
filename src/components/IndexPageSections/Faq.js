// FAQ Component

import React from "react"
import styled from "styled-components"

// Components
import Section from "../Layout/Section.js"
import { LineBreak, IndentedText } from "../Layout/textformat.js"

// Util
import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"

const StyledInfoContainer = styled.div`
  // max-width: 40%;
  margin-left: 2%;
  margin-bottom: 2%;
  width: 80%;

  & p, & li {
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

const faqText = [{
  question: `What time should I arrive for the ceremony?`,
  answer: `The ceremony will start at 2:30 pm. We suggest arriving by 2:15 pm.
    You are welcome to sit on either side of the aisle. Reserved seating
    will be marked. There are shuttle buses from the Cambridge Hotel and
    Hilton Hotels. The shuttles will arrive at the Cambridge Mill at 1:45 pm
    and 2:15 pm.`,
},
{
  question: `Is there a dress code?`,
  answer: `Semi-formal/cocktail attire (ie. suit & tie / dress or equivalent!).
  The wedding will be inside with the exception of a short outdoor walk between
  the ceremony space and reception space.`,
},
{
  question: `Is there parking?`,
  answer: `Yes! The Cambridge Mill has ample parking. You are welcome to leave your
    car overnight and pick it up in the morning.`,
},
{
  question: `Where should I stay?`,
  answer: `Please see the Accommodations section above. We have reserved group blocks at
    two hotels. Please note there is a preferred rate at both hotels held until January
     24, 2023.
    In order to accommodate rooms for everyone, we have booked two hotel blocks.
    The Cambridge Hotel & Conference centre has a preferred wedding rate of $134
    per night plus taxes with hot breakfast buffet included for 2 guests. These are
    for Traditional rooms with 2 queen Beds or Deluxe rooms with 1 queen bed and pull
    out. There are suites that are offered at a discounted rate - but we have not
    held those rooms as part of our group hold. The second hotel, The Hilton Garden
    Inn Kitchener/Cambridge, has a preferred rate of $134 per night plus taxes for a
    King Standard room.`,
},
{
  question: `Accessibility?`,
  answer: `The Cambridge Mill has a large ramp from the parking lot to the ceremony space,
    The Pavilion. There is a short outdoor walk between the ceremony space and the reception
    space at the main building (about 60 m) on a walkway that is maintained by the
    Cambridge Mill staff. Inside the main building, there are elevators to take you up one floor
    to the Falls Room reception space. The Cambridge Mill staff will assist with directions.`,
},
{
  question: `Will transportation be provided between to/from the hotel?`,
  answer: `Yes! Shuttle buses will transport guests to the Cambridge Mill from the
    Cambridge Hotel and Hilton Hotel. The shuttles will leave at 1:30 p.m. and 2:00 p.m.
    At the end of the night, shuttles will leave the venue at 11:00 p.m., 12:00 p.m.,
    12:30 p.m., 1:15 a.m.`,
},
{
  question: `I still have questions, how should I contact you?`,
  answer: `Please contact us by email, jacquelineandbrendan@gmail.com, or by phone/text
    to our personal phones.`,
},
{
  question: `Can I bring a gift?`,
  answer: `Gifts are not necessary but monetary gifts are appreciated.`,
},
{
  question: `Are vegan/vegetarian options provided?`,
  answer: `Yes. Please indicate any dietary restrictions or allergies in the RSVP.`,
},
{
  question: `How do I RSVP?`,
  answer: `Click on the RSVP link in the top bar of the website. Enter your name or
    the name of someone in your party. You can respond for everyone in your party if you
    like. If there is a song that will guarantee you to light up the dance floor, fill it
    in at the bottom!`,
},
];

const faqList = faqText.map((qa, ind) => {
  return (
    <>
    <li key="ind">
      {qa.question}
      <LineBreak />
      <IndentedText>{qa.answer}</IndentedText>
    </li>
    <LineBreak />
    </>
  );
})

const Faq = (props) => {

  return (
    <Section headingRef={props.headingRef} name={props.headingName}>
      <StyledInfoContainer>
        <ol>
          {faqList}
        </ol>
      </StyledInfoContainer>
    </Section>
  )

}

export default Faq