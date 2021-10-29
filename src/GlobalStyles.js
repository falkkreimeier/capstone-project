import { createGlobalStyle } from 'styled-components'
import Ventana from './Font/Lakritzel-Ventana.otf'

const GlobalStlyles = createGlobalStyle`

:root {
    --border-radius: 19px;
    --main-width: 352px;
    --main-padding: 10px;
    --color-fond: black;
    --main-font: "Inter", sans-serif;
    --main-Headline: 'Playfair Display', serif;
    --kritzel-Font: 'Ventana';
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
