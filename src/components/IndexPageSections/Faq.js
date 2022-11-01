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

const faqText = [{
  question: `What time should I arrive at the ceremony?`,
  answer: `Ceremony will start at 2:30 pm. We suggest arriving by 2:15 pm
    and you are welcome to sit on either side of the aisle. Reserved seating
    will be marked. There are shuttle buses from the Cambridge Hotel and
    Hilton Hotels. The shuttles will be arrive at the ceremony 1:45 pm and
    2:15 pm.`,
},
{
  question: `Is there a dress code?`,
  answer: `Semi-formal/cocktail attire, please wear suits (with ties) and dresses,
    or equivalent! The wedding will be inside with the exception of a short outdoor
    walk between the ceremony space and reception space.`,
},
{
  question: `Is there parking?`,
  answer: `Yes! The Cambridge Mill has ample parking, you are allowed to leave your
    car overnight and pick it up in the morning.`,
},
{
  question: `Where should I stay?`,
  answer: `Please see the Accommodations page, we have reserved group blocks at
    two hotels. Please note there is a preferred rate at both hotels but must be
    booked by January 24, 2023.
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
  answer: `The Cambridge Mill is accessible for all. There is a large ramp up to the
    ceremony space, The Pavilion. There is a short outdoor walk between the ceremony
    space and the reception space but the walkway will be maintained. Inside the venue
    building, the reception will take place on the second floor, there is an elevator
    to take you up to the second floor. Cambridge Mill staff can assist with directions.`,
},
{
  question: `Will transportation be provided between to/from the hotel?`,
  answer: `Yes! Shuttle buses will transport guests to the Cambridge Mill from the
    Cambridge Hotel and Hilton hotels. The shuttles will leave at 1:30 p.m. and 2:00 p.m.
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
  answer: `Gifts are not required but monetary gifts are appreciated.`,
},
{
  question: `Are vegan/vegetarian options provided?`,
  answer: `Yes, when RSVP’ing please indicate any dietary restrictions or allergies.`,
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