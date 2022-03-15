import { createGlobalStyle } from 'styled-components'
import Ventana from './Font/Lakritzel-Ventana.otf'

const GlobalStlyles = createGlobalStyle`

:root {
    --border-radius: 1px;
    --main-width: 352px;
    --main-padding: 10px;
    --color-fond: black;
    --main-font:  'Fira Sans', sans-serif;
    --main-Headline: 'Pragati Narrow', sans-serif;
    --kritzel-Font: 'Ventana';
    --soMe-width: 234px;
} 
@font-face {
    font-family: Ventana;
    src: url(${Ventana}) format("openType");
}


/* fira-sans-200 - latin */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/fira-sans-v15-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/fira-sans-v15-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/fira-sans-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/fira-sans-v15-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/fira-sans-v15-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/fira-sans-v15-latin-200.svg#FiraSans') format('svg'); /* Legacy iOS */
}

/* pragati-narrow-700 - latin */
@font-face {
  font-family: 'Pragati Narrow';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/pragati-narrow-v11-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/pragati-narrow-v11-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/pragati-narrow-v11-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/pragati-narrow-v11-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/pragati-narrow-v11-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/pragati-narrow-v11-latin-700.svg#PragatiNarrow') format('svg'); /* Legacy iOS */
}


html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
    
}

p {
    line-height: 1.5;
}

span {
    line-height: 1.5;
}

body {
    background-color: black;
    margin: 0;
    
}

h2 {
    font-family: Ventana;
}

`
export default GlobalStlyles
