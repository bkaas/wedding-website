import React from "react"
import styled from "styled-components"

// Fonts
import FontStyles from "../fonts/FontStyles.js"

// Components
import Layout from "../components/Layout/Layout.js"

const weddingDate = "Saturday, February 25, 2023";
const venue = "Cambridge Mill";

const fontSizes = {names: "2.5em", date: "1.75em", info: "2em"};
const fontDownScale = {px768: 0.75, px640: 0.6, px320: 0.45};

const Names = styled.h1`
  text-align: center;
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: ${fontSizes["names"]};
  margin: 0 1em 1em;

  @media (max-width: 768px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px768"]});
  }

  @media (max-width: 640px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px640"]});
  }

  @media (max-width: 320px) {
    font-size: calc(${fontSizes["names"]} * ${fontDownScale["px320"]});
  }
`;

const WeddingDate = styled.div`
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-size: ${fontSizes["date"]};
  margin: 0.25em 0;

  @media (max-width: 768px) {
    font-size: calc(${fontSizes["date"]} * ${fontDownScale["px768"]});
  }

  @media (max-width: 640px) {
    font-size: calc(${fontSizes["date"]} * ${fontDownScale["px640"]});
  }

  @media (max-width: 320px) {
    font-size: calc(${fontSizes["date"]} * ${fontDownScale["px320"]});
  }
`;

const Venue = styled(WeddingDate)``;

const MoreInfo = styled(WeddingDate)`
  margin-top: 2em;
  font-style: italic;
  font-size: ${fontSizes["info"]};

  @media (max-width: 768px) {
    font-size: calc(${fontSizes["info"]} * ${fontDownScale["px768"]});
  }

  @media (max-width: 640px) {
    font-size: calc(${fontSizes["info"]} * ${fontDownScale["px640"]});
  }

  @media (max-width: 320px) {
    font-size: calc(${fontSizes["info"]} * ${fontDownScale["px320"]});
  }
`;

const Blank = styled.div`
  width: 100%;
  height: 30em;
`;

const HomePage = () => {
  return (
    <Layout>
      <title>Brendan Kaas and Jacqueline Fossenier's Wedding Website</title>
      <header>
        <FontStyles />
        <Names>Brendan & Jacqueline</Names>
        <WeddingDate>{weddingDate}</WeddingDate>
        <Venue>{venue}</Venue>
      </header>
      <MoreInfo>More Info Coming Soon!</MoreInfo>
      <Blank />
    </Layout>
  )
}

export default HomePage
