import React from "react"
import styled from "styled-components"
import topSvg from "../images/top.svg"
import topInsideSvg from "../images/topInsideInv.svg"
import leftSvg from "../images/left.svg"

const envH = 25; // rem
const envW = 30; // rem

const StyledEnvelope = styled.div`
  position: relative;
  margin: auto;
  width: ${envW}rem;
  height: ${envH}rem;
  border: 2px solid pink;
`;

const topW = envW; // rem, chosen arbitrarily
// Ratio calculated from svg ratio and width
const topH = topW * 25.84 / 40; // rem, 19.38
// const topH = 19.3966; // rem

const Top = styled.div`
  position: relative;
  width: 30rem;
  height: ${topH}rem;
  // border: 2px solid black;
  z-index: 1;
`;

// Envelope top styling
const topImgCommon = `
  width: 30rem;
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
`;

const TopImgInside = styled.img`
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

const LeftImg = styled.img`
  position: absolute;
  top: 0;
  height: ${envH}rem;
  width: auto;
  // transform: translateY(-${topH}rem)
  // visibility: hidden;
`;

const RightImg = styled(LeftImg)`
  transform:
    rotateY(180deg)
    translateX(calc(-${envW}rem + 100%)
  );
`;


const Envelope = () => {
  return (

    <div class="outer">
      <StyledEnvelope>

        <Top>

          <TopImg
            src={topSvg}
            alt="triangle with all three sides equal"
          />

          <TopImgInside
            src={topInsideSvg}
            alt="triangle with all three sides equal"
          />

        </Top>

        <LeftImg
          src={leftSvg}
          alt="triangle with all three sides equal"
        />

        <RightImg
          src={leftSvg}
          alt="triangle with all three sides equal"
        />


      </StyledEnvelope>

    </div>

  );
}

export default Envelope