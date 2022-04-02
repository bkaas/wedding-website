import React from "react"
import headerImg from "../images/RunnerHeader001.png"
import footerImg from "../images/RunnerFooter001.png"
import styled from "styled-components"

// Components
import Layout from "../components/Layout/Layout.js"

const weddingDate = "Saturday, February 25, 2023";
const venue = "Cambridge Mill";

const RunnerHeader = styled.img`
  width: 100%;
  height: auto;
`;

const RunnerFooter = styled(RunnerHeader)`
  transform: rotateX(180deg);
`;

const Names = styled.h1`
  text-align: center;
  // margin: 0;
  // position: relative;
  // top: -10px;
`;

const WeddingDate = styled.div`
  text-align: center;
`;

const Venue = styled(WeddingDate)``;

const Blank = styled.div`
  width: 100%;
  height: 30em;
`;

const HomePage = () => {
  return (
    <Layout>
      <title>Brendan Kaas and Jacqueline Fossenier's Wedding Website</title>
      <RunnerHeader src={headerImg} alt="Nice Flowers" />
      <header>
        <Names>Brendan & Jacqueline</Names>
        <WeddingDate>{weddingDate}</WeddingDate>
        <Venue>{venue}</Venue>
      </header>
      <Blank />
      <RunnerFooter src={footerImg} alt="Nice Flowers" />
    </Layout>
  )
}

export default HomePage
