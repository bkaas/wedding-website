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

const StyledEnvelope = styled.div`
  position: relative;
  margin: auto;
  width: ${({envW}) => envW}rem;
  height: ${({envH}) => envH}rem;
`;

// Envelope top hieght/width ratio (calculated from svg aspect ratio)
const topHRatio = 25.84 / 40; // rem, 19.38

const Top = styled.div`
  position: relative;
  width: ${({envW}) => envW}rem;
  height: ${({envW}) => envW * topHRatio}rem;
  // border: 2px solid black;
  z-index: 2;
`;

// Envelope top styling
const topImgCommon = `
  width: ${({envW}) => envW}rem;
  height: ${({envW}) => envW * topHRatio}rem;
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
  width: ${({envW}) => envW}rem;
  height: ${({envW}) => envW * topHRatio}rem;
`;

const LeftImg = styled.img`
  position: absolute;
  top: 0;
  height: ${({envH}) => envH}rem;
  width: auto;
  // visibility: hidden;
`;

const RightImg = styled(LeftImg)`
  right: 0;
  height: ${({envH}) => envH}rem;
`;

const BottomImg = styled.img`
  position: absolute;
  bottom: 0;
  width: ${({envW}) => envW}rem;
  z-index: 1;
  filter: drop-shadow(0px -1px 2px rgb(0 0 0 / 0.4));
`;

const InsideImg = styled.img`
  position: absolute;
  top: 0;
  width: ${({envW}) => envW}rem;
  height: ${({envH}) => envH}rem;
  z-index: -1;
`;

const EnvelopeBack = ({className, envW, envH}) => {

  return (

    <StyledEnvelope
      className={className}
      envW={envW}
      envH={envH}
    >

      <Top envW={envW}>

        <TopImg
          src={topSvg}
          alt="Triangle emulating the back top of an envelope."
        />

        <StyledContainer>
          <StyledTopInside href={inside} envW={envW}/>
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

    </StyledEnvelope>

  );
}

export default EnvelopeBack