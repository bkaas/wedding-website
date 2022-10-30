import React from "react"
import styled from "styled-components"

// Components
import Layout, {headingData} from "../components/Layout/Layout.js"
import Section from "../components/Layout/Section.js"
import TheDay from "../components/IndexPageSections/TheDay.js"
import Accomodation from "../components/IndexPageSections/Accomodation.js"

// Media Queries
import mediaQueries, {fontSizes} from "../util/mediaQueries.js"

const weddingDate = "Saturday, February 25, 2023";
const venue = "Cambridge Mill";


const WeddingDate = styled.div`
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-size: ${fontSizes["date"]};
  margin: 0.25em 0;

  ${mediaQueries("date")}
`;

const Venue = styled(WeddingDate)``;

// const MoreInfo = styled(WeddingDate)`
//   margin-top: 2em;
//   font-style: italic;
//   font-size: ${fontSizes["info"]};

//   ${mediaQueries("info")}
// `;

// const Blank = styled.div`
//   width: 100%;
//   height: 30em;
// `;

// const Headings = styled.h2`
//   font-family: "Perpetua Titling MT", serif;
//   font-weight: normal;
//   font-size: ${fontSizes["names"]};
//   margin: 0 1em 1em;
// `;

const HomePage = () => {
  return (
    <Layout>
      <title>Jacqueline Fossenier and Brendan Kaas' Wedding Website</title>
      <div>
        {/*<FontStyles />*/}
        <WeddingDate>{weddingDate}</WeddingDate>
        <Venue>{venue}</Venue>
      </div>
      {/*<MoreInfo>More Info Coming Soon!</MoreInfo>*/}
      {/*<Blank />*/}
      {/*<Headings ref={headingRef} id="heading-theday">The Day</Headings>*/}
      {/*<Section headingRef={headingData[0].ref} name={headingData[0].name}></Section>*/}
      <TheDay headingRef={headingData[1].ref} headingName={headingData[1].name}/>
      {/*<Section headingRef={headingData[1].ref} name={headingData[1].name}></Section>*/}
      {/*<Section headingRef={headingData[2].ref} name={headingData[2].name}></Section>*/}
      <Accomodation headingRef={headingData[2].ref} headingName={headingData[2].name}/>
      <Section headingRef={headingData[3].ref} name={headingData[3].name}/>
    </Layout>
  )
}

export default HomePage
