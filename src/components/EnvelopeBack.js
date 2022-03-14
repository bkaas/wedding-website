import React from "react"
import styled, {keyframes} from "styled-components"

// Component Imports
import TopInside from "./TopInside.js"
import SaveTheDateCard from "./SaveTheDateCard.js"

// Image Imports
import topSvg from "../images/top.svg"
import leftSvg from "../images/left.svg"
import rightSvg from "../images/right.svg"
import bottomSvg from "../images/bottom.svg"
import inside from "../images/envBackground.jpg"

const StyledEnvelope = styled.div`
  position: relative;
  margin: auto;
  width: ${({envW}) => envW}rem;
  height: ${({envH}) => envH}rem;
`;

// Envelope top hieght/width ratio (calculated from svg aspect ratio)
const topHRatio = 25.84 / 40; // rem, 19.38

// Drop the envelope top behind the card inside once it's opened
const disappear = keyframes`
  to {
    z-index: 1;
  }
`;

const Top = styled.div`
  position: relative;
  width: ${({envW}) => envW}rem;
  height: ${({envW}) => envW * topHRatio}rem;
  // border: 2px solid black;

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
    // z-index: 1;
  }
`;

// Envelope top styling
const topImgCommon = (envW, duration, delay) => `
  width: ${envW}rem;
  height: ${envW * topHRatio}rem;
  transition: transform 0.8s;
  backface-visibility: hidden;

  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-fill-mode: forwards;
`;

const TopImg = styled.img`
  ${({envW, tEnvOpen}) => topImgCommon(envW, tEnvOpen["duration"], tEnvOpen["delay"])};
  filter: drop-shadow(0px 1px 2px rgb(0 0 0 / 0.4));
  transform-origin: 0 0;

  animation-name: ${envOpen(0)};

  // &:hover {
  //   transform: rotateX(180deg);
  // }
  // visibility: hidden;
`;

// Wrap the svg component in a div so the backface-visibility works
const StyledContainer = styled.div`
  ${({envW, tEnvOpen}) => topImgCommon(envW, tEnvOpen["duration"], tEnvOpen["delay"])};
  position: absolute;
  left: 0;
  top: -100%;

  transform: rotateX(180deg);
  transform-origin: 0 100%;

  animation-name: ${envOpen(180)};

  // ${TopImg}:hover + & {
  //   transform: rotateX(0deg);
  // }
`;

const StyledTopInside = styled(TopInside)`
  width: ${({envW}) => envW}rem;
  height: ${({envW}) => envW * topHRatio}rem;
`;

const LeftImg = styled.img`
  position: absolute;
  top: 0;
  height: ${({envH}) => envH}rem;
  width: auto;
  // visibility: hidden;
  z-index: 2;
`;

const RightImg = styled(LeftImg)`
  right: 0;
  height: ${({envH}) => envH}rem;
`;

const BottomImg = styled.img`
  position: absolute;
  bottom: 0;
  width: ${({envW}) => envW}rem;
  z-index: 3;
  filter: drop-shadow(0px -1px 2px rgb(0 0 0 / 0.4));
`;

const InsideImg = styled.img`
  position: absolute;
  top: 0;
  width: ${({envW}) => envW}rem;
  height: ${({envH}) => envH}rem;
  z-index: -1;
`;

// Move card animation
const removeCard = (envH) => keyframes`
  25% {
    /* Remove card from envelope */
    transform: translateY(-${envH}rem);
  }

  50% {
    /* Rotate Card */
    transform: translateY(-${envH}rem) rotate(0.25turn);
  }

  100% {
    /* Move card in front of the envelope and enlarge */
    z-index: 4;
    transform: translateY(-${envH}rem) rotate(0.25turn) translateX(${envH}rem) scale(1.5);
  }
`;

const StyledSaveTheDateCard = styled(SaveTheDateCard)`
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  width: 95%;
  // height: 95%;
  height: auto;
  z-index: 1;

  animation-name: ${({envH}) => removeCard(envH)};
  animation-duration: ${({tCardOpen}) => tCardOpen["duration"]}s;
  animation-delay: ${({tCardOpen}) => tCardOpen["delay"]}s;
  animation-fill-mode: forwards;
`;

const EnvelopeBack = ({className, envW, envH, tEnvOpen, tCardOpen, color}) => {

  return (

    <StyledEnvelope
      className={className}
      envW={envW}
      envH={envH}
    >

      <Top envW={envW} tEnvOpen={tEnvOpen}>

        <TopImg
          src={topSvg}
          alt="Triangle emulating the back top of an envelope."
          envW={envW}
          tEnvOpen={tEnvOpen}
        />

        <StyledContainer envW={envW} tEnvOpen={tEnvOpen}>
          <StyledTopInside href={inside} envW={envW} color={color}/>
        </StyledContainer>

      </Top>

      <LeftImg
        src={leftSvg}
        alt="Tringle emulating the back left of an envelope."
        envH={envH}
      />

      <RightImg
        src={rightSvg}
        alt="Triangle emulating the back right of an envelope."
        envH={envH}
      />

      <BottomImg
        src={bottomSvg}
        alt="Triangle emulating the back bottom of an envelope."
        envW={envW}
      />

      <InsideImg
        src={inside}
        alt="triangle with all three sides equal"
        envW={envW}
        envH={envH}
      />

      <StyledSaveTheDateCard envH={envH} tCardOpen={tCardOpen}/>

    </StyledEnvelope>

  );
}

export default EnvelopeBack