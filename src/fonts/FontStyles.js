import { createGlobalStyle } from 'styled-components';
import GoudyOS from "./goudy-old-style/GOUDOS.ttf"
import Perpetua from "./Perpetua-Titling-MT/PERTILI.ttf"
import Pinyon from "./Pinyon-Script-Font/PinyonScript-Regular.ttf"

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Goudy Old Style';
    src: url(${GoudyOS}) format('truetype');
  }

  @font-face {
    font-family: 'Perpetua Titling MT';
    src: url(${Perpetua}) format('truetype');
  }

  @font-face {
    font-family: 'Pinyon Script';
    src: url(${Pinyon}) format('truetype');
  }

`;

export default FontStyles;