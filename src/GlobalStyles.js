import { createGlobalStyle } from 'styled-components'
import Ventana from './Font/Lakritzel-Ventana.otf'

const GlobalStlyles = createGlobalStyle`

:root {
    --border-radius: 19px;
    --main-width: 22rem;
    --main-padding: 5px;
    --color-fond: black;
    --main-font: "Inter", sans-serif;
    --main-Headline: 'Playfair Display', serif;
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

body {
    background-color: black;
}

h2 {
    font-family: Ventana;
}

`
export default GlobalStlyles
