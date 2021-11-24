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

html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
    
}

p {
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
