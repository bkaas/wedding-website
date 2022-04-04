import React from "react"
import styled, {keyframes} from "styled-components"

// Component Imports
import TopInside from "./TopInside.js"
import SaveTheDateCard from "../SaveTheDateCard.js"

// Image Imports
import topSvg from "../../images/top.svg"
import leftSvg from "../../images/left.svg"
import rightSvg from "../../images/right.svg"
import bottomSvg from "../../images/bottom.svg"
import inside from "../../images/envBackground.jpg"

const StyledEnvelope = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%
`;

// Drop the envelope top behind the card inside once it's opened
const disappear = keyframes`
  to {
    z-index: 1;
  }
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  /* Defining the top fold height as a percentage of the envelope height */
  height: calc(100% * 0.881);
  // border: 2px solid black; /* Debug */

  z-index: 4;

  animation-name: ${disappear};
  animation-duration: ${({tEnvOpen}) => tEnvOpen["duration"]}s;
  animation-delay: ${({tEnvOpen}) => tEnvOpen["delay"] + 0.1}s;
  animation-fill-mode: forwards;
`;

// Open envelope keyframe
const envOpen = (start) => keyframes`
  from {
    transform: rotateX(${start}deg);
  }

  to {
    transform: rotateX(${180 - start}deg);
  }
`;

// Envelope top styling common to the outside and inside of the top fold
const topImgCommon = (duration, delay) => `
  width: 100%;
  transition: transform 0.8s;
  backface-visibility: hidden;

  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-fill-mode: forwards;
`;

const TopOutside = styled.img`
  ${({tEnvOpen}) => topImgCommon(tEnvOpen["duration"], tEnvOpen["delay"])};
  filter: drop-shadow(0px 1px 2px rgb(0 0 0 / 0.4));
  transform-origin: 0 0;
  height: auto;

  animation-name: ${envOpen(0)};

  /* Old debug */
  // &:hover {
  //   transform: rotateX(180deg);
  // }
  // visibility: hidden;
`;

// Wrap the svg component in a div so the backface-visibility works
const TopInsideContainer = styled.div`
  ${({tEnvOpen}) => topImgCommon(tEnvOpen["duration"], tEnvOpen["delay"])};
  height: 100%;
  position: absolute;
  left: 0;
  top: -100%;

  transform: rotateX(180deg);
  transform-origin: 0 100%;

  animation-name: ${envOpen(180)};

  /* Old debug */
  // ${TopOutside}:hover + & {
  //   transform: rotateX(0deg);
  // }
`;

const StyledTopInside = styled(TopInside)`
  width: 100%;
  height: 100%; /* related to the black line at the top fold */
`;

const LeftImg = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;
  z-index: 2;
`;

const RightImg = styled(LeftImg)`
  right: 0;
`;

const BottomImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 3;
  filter: drop-shadow(0px -1px 2px rgb(0 0 0 / 0.4));
`;

const InsideImg = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

// Move card animation
const removeCard = keyframes`
  25% {
    /* Remove card from envelope */
    transform: scale(calc(1 / 1.5)) translateY(-100%);
    z-index: 1;
  }

  50% {
    /* Rotate Card */
    transform: scale(calc(1 / 1.5)) translateY(-100%) rotate(0.25turn);
    z-index: 4;
  }

  100% {
    /* Move card in front of the envelope and enlarge. 70% chosen by eye */
    transform: translateY(-100%) rotate(0.25turn) translateX(75%) scale(1);
    z-index: 4;
  }
`;

const StyledSaveTheDateCard = styled(SaveTheDateCard)`
  position: absolute;
  top: -23%; /* emperically determined */
  left: -21.25%; /* 95% width, 2.5% gap on each side * 1.5 */

  /* Import the image larger to anticipate the upscale.
  Upscaling caused the image to degrade */
  width: 142.5%;
  height: auto;
  transform: scale(calc(1 / 1.5)); /* Scale down first to maintain image quality */
  z-index: 1;

  animation-name: ${removeCard};
  animation-duration: ${({tCardOpen}) => tCardOpen["duration"]}s;
  animation-delay: ${({tCardOpen}) => tCardOpen["delay"]}s;
  animation-fill-mode: forwards;
`;

const EnvelopeBack = ({className, tEnvOpen, tCardOpen, color}) => {

  return (

    <StyledEnvelope className={className}>

      <Top tEnvOpen={tEnvOpen}>

        <TopOutside
          src={topSvg}
          alt="Triangle emulating the top outside of an envelope."
          tEnvOpen={tEnvOpen}
        />

        <TopInsideContainer tEnvOpen={tEnvOpen}>
          <StyledTopInside href={inside} color={color}/>
        </TopInsideContainer>

      </Top>

      <LeftImg
        src={leftSvg}
        alt="Tringle emulating the back left of an envelope."
      />

      <RightImg
        src={rightSvg}
        alt="Triangle emulating the back right of an envelope."
      />

      <BottomImg
        src={bottomSvg}
        alt="Triangle emulating the back bottom of an envelope."
      />

      <InsideImg
        src={inside}
        alt="Inside the envelope pattern"
      />

      <StyledSaveTheDateCard tCardOpen={tCardOpen}/>

    </StyledEnvelope>

  );
}

export default EnvelopeBack