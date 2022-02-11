import React from "react"
import styled from "styled-components"

// Component Imports
import TopInside from "./TopInside.js"

// Image Imports
import topSvg from "../images/top.svg"
import leftSvg from "../images/left.svg"
import rightSvg from "../images/right.svg"
import bottomSvg from "../images/bottom.svg"
import inside from "../images/envelopeBackground.jpg"

// Envelope sizing
const envH = 11; // rem
const envW = 15; // rem

const StyledEnvelope = styled.div`
  position: relative;
  margin: auto;
  width: ${envW}rem;
  height: ${envH}rem;
`;

// Ratio calculated from svg ratio and width
const topH = envW * 25.84 / 40; // rem, 19.38

const Top = styled.div`
  position: relative;
  width: ${envW}rem;
  height: ${topH}rem;
  // border: 2px solid black;
  z-index: 2;
`;

// Envelope top styling
const topImgCommon = `
  width: ${envW}rem;
  height: ${topH}rem;
  transition: transform 0.8s;
  backface-visibility: hidden;
`;

const TopImg = styled.img`
  ${topImgCommon}
  filter: drop-shadow(0px 1px 2px rgb(0 0 0 / 0.4));
  transform-origin: 0 0;

  &:hover {
    transform: rotateX(180deg);
  }
  // visibility: hidden;
`;

// Wrap the svg component in a div so the backface-visibility works
const StyledContainer = styled.div`
  ${topImgCommon}
  position: absolute;
  left: 0;
  top: -100%;

  transform: rotateX(180deg);
  transform-origin: 0 100%;

  ${TopImg}:hover + & {
    transform: rotateX(0deg);
  }
`;

const StyledTopInside = styled(TopInside)`
  width: ${envW}rem;
  height: ${topH}rem;
`;

const LeftImg = styled.img`
  position: absolute;
  top: 0;
  height: ${envH}rem;
  width: auto;
  // visibility: hidden;
`;

const RightImg = styled(LeftImg)`
  right: 0;
`;

const BottomImg = styled.img`
  position: absolute;
  bottom: 0;
  width: ${envW}rem;
  z-index: 1;
  filter: drop-shadow(0px -1px 2px rgb(0 0 0 / 0.4));
`;

const InsideImg = styled.img`
  position: absolute;
  top: 0;
  width: ${envW}rem;
  height: ${envH}rem;
  z-index: -1;
`;

const Envelope = ({className}) => {
  return (

    <StyledEnvelope className={className}>

      <Top>

        <TopImg
          src={topSvg}
          alt="triangle with all three sides equal"
        />

        <StyledContainer>
          <StyledTopInside href={inside} />
        </StyledContainer>

      </Top>

      <LeftImg
        src={leftSvg}
        alt="triangle with all three sides equal"
      />

      <RightImg
        src={rightSvg}
        alt="triangle with all three sides equal"
      />

      <BottomImg
        src={bottomSvg}
        alt="triangle with all three sides equal"
      />

      <InsideImg
        src={inside}
        alt="triangle with all three sides equal"
      />

    </StyledEnvelope>

  );
}

export default Envelope