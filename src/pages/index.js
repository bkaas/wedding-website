import React from "react"
import styled from "styled-components"

// Fonts
import FontStyles from "../fonts/FontStyles.js"

// Components
import Layout from "../components/Layout/Layout.js"
import Section from "../components/Layout/Section.js"
import TheDay from "../components/IndexPageSections/TheDay.js"
import Accomodation from "../components/IndexPageSections/Accomodation.js"

// Media Queries
import mediaQueries, {fontSizes} from "../util/mediaQueries.js"

const weddingDate = "Saturday, February 25, 2023";
const venue = "Cambridge Mill";


const Names = styled.h1`
  text-align: center;
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  margin: 0 1em 1em;

  ${mediaQueries("names")}
`;

const WeddingDate = styled.div`
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-size: ${fontSizes["date"]};
  margin: 0.25em 0;

  ${mediaQueries("date")}
`;

const Venue = styled(WeddingDate)``;

const MoreInfo = styled(WeddingDate)`
  margin-top: 2em;
  font-style: italic;
  font-size: ${fontSizes["info"]};

  ${mediaQueries("info")}
`;

const Blank = styled.div`
  width: 100%;
  height: 30em;
`;

const Headings = styled.h2`
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  margin: 0 1em 1em;
`;

// Create a ref to the headings
const headingData = [{
    "name": "Home", // handled on the anchor onClick to scroll to the topq
  },
  {
    "name": "The Day",
    "ref": React.createRef(),
  },
  {
    "name": "Accommodation",
    "ref": React.createRef(),
  },
  {
    "name": "FAQ",
    "ref": React.createRef(),
  },
];

const HomePage = () => {
  return (
    <Layout headings={headingData}>
      <title>Brendan Kaas and Jacqueline Fossenier's Wedding Website</title>
      <div>
        <FontStyles />
        {/*<Names>Brendan & Jacqueline</Names>*/}
        <WeddingDate>{weddingDate}</WeddingDate>
        <Venue>{venue}</Venue>
      </div>
      {/*<MoreInfo>More Info Coming Soon!</MoreInfo>*/}
      {/*<Blank />*/}
      {/*<Headings ref={headingRef} id="heading-theday">The Day</Headings>*/}
      {/*<Section headingRef={headingData[0].ref} name={headingData[0].name}></Section>*/}
      <TheDay headingRef={headingData[1].ref}/>
      {/*<Section headingRef={headingData[1].ref} name={headingData[1].name}></Section>*/}
      {/*<Section headingRef={headingData[2].ref} name={headingData[2].name}></Section>*/}
      <Accomodation headingRef={headingData[2].ref} />
      <Section headingRef={headingData[3].ref} name={headingData[3].name}></Section>
    </Layout>
  )
}

export default HomePage
