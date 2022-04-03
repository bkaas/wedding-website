import React from "react"
import styled from "styled-components"

// Fonts
import FontStyles from "../fonts/FontStyles.js"

// Components
import Layout from "../components/Layout/Layout.js"

const weddingDate = "Saturday, February 25, 2023";
const venue = "Cambridge Mill";

const Names = styled.h1`
  text-align: center;
  font-family: "Perpetua Titling MT", serif;
  font-weight: normal;
  font-size: 3em;
  margin: 0 0.5em 1em;
  @media (max-width: 640px) {
    font-size: calc(3em * 0.75);
  }
`;

const WeddingDate = styled.div`
  text-align: center;
  font-family: "Goudy Old Style", serif;
  font-size: 2em;
  margin: 0.25em 0;
  @media (max-width: 640px) {
    font-size: calc(2em * 0.75);
  }
`;

const Venue = styled(WeddingDate)``;

const MoreInfo = styled(WeddingDate)`
  margin-top: 2em;
  font-style: italic;
  font-size: 2.5em;
  @media (max-width: 640px) {
    font-size: calc(2.5em * 0.75);
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
