import { createGlobalStyle } from 'styled-components'
import UrbanistBold from './assets/fonts/Urbanist/Urbanist-Bold.ttf'
import Urbanist from './assets/fonts/Urbanist/Urbanist-Regular.ttf'
import UrbanisLight from './assets/fonts/Urbanist/Urbanist-Light.ttf'
import Quicksand from './assets/fonts/Quicksand/Quicksand-Regular.ttf'
import QuicksandLight from './assets/fonts/Quicksand/Quicksand-Light.ttf'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 600;
    src: url(${UrbanistBold});
  }
  @font-face {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: normal;
    src: url(${Urbanist});
  }

  @font-face {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 300;
    src: url(${UrbanisLight});
  }
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: normal;
    src: url(${Quicksand});
  }
  @font-face {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 300;
    src: url(${QuicksandLight});
  }

`
