// Media Queries
// Put the common media query scaling in its own function

// Usage:
//   import mediaQueries, {fontSizes} from "../../util/mediaQueries.js"
//
//   // within styled component:
//   ${mediaQueries("info")}

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

function mediaQueries(textType, fontScale = fontDownScale, customFontSize) {

  if (!fontSizes[textType]) {
    throw new Error(`"${textType}" doesn't exist. Please enter one of ${Object.keys(fontSizes)}`)
  }

  const localFontSize =
    typeof customFontSize === "undefined" ? fontSizes[textType] : customFontSize;

  const outStr = `
    @media (min-width: 1400px) {
      font-size: calc(${localFontSize} * ${fontScale["px1400"]});
    }

    @media (max-width: 900px) {
      font-size: calc(${localFontSize} * ${fontScale["px900"]});
    }

    @media (max-width: 768px) {
      font-size: calc(${localFontSize} * ${fontScale["px768"]});
    }

    @media (max-width: 640px) {
      font-size: calc(${localFontSize} * ${fontScale["px640"]});
    }

    @media (max-width: 380px) {
      font-size: calc(${localFontSize} * ${fontScale["px380"]});
    }`;

  return outStr;
}

export default mediaQueries