import { createGlobalStyle } from 'styled-components'
import Wisdom from './Font/Wisdom.otf'

const GlobalStlyles = createGlobalStyle`
@font-face {
    font-family: wisdom;
    src: url(${Wisdom}) format("openType");
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
    font-family: Wisdom;
}

`
export default GlobalStlyles
