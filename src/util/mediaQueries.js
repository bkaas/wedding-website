// Media Queries
// Put the common media query scaling in its own function

export const fontSizes = {
  names: "2.5em",
  date: "1.75em",
  info: "2em",
  content: "1.4em",
};

const fontDownScale = {
  px1400: 1.2,
  px900: 0.9,
  px768: 0.75,
  px640: 0.62,
  px380: 0.45
};

function mediaQueries(textType) {

  if (!fontSizes[textType]) {
    throw new Error(`"${textType}" doesn't exist. Please enter one of ${Object.keys(fontSizes)}`)
  }

  const outStr = `
    @media (min-width: 1400px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px1400"]});
    }

    @media (max-width: 900px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px900"]});
    }

    @media (max-width: 768px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px768"]});
    }

    @media (max-width: 640px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px640"]});
    }

    @media (max-width: 380px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px380"]});
    }`;

  return outStr;
}

export default mediaQueries