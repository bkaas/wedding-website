// Media Queries
// Put the common media query scaling in its own function

export const fontSizes = {
  names: "2.5em",
  date: "1.75em",
  info: "2em",
  content: "1.4em",
};

const fontDownScale = {
  px768: 0.75,
  px640: 0.6,
  px320: 0.45
};

function mediaQueries(textType) {

  if (!fontSizes[textType]) {
    throw new Error(`"${textType}" doesn't exist. Please enter one of ${Object.keys(fontSizes)}`)
  }

  const outStr = `
    @media (max-width: 768px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px768"]});
    }

    @media (max-width: 640px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px640"]});
    }

    @media (max-width: 320px) {
      font-size: calc(${fontSizes[textType]} * ${fontDownScale["px320"]});
    }`;

  return outStr;
}

export default mediaQueries