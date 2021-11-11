import styled from 'styled-components/macro'
import klecks from '../Assets/Kleckse_clean.jpg'
import { Link } from 'react-router-dom'

function CocktailsLink() {
  return (
    <LinkTo to="/cocktails">
      <Headline>Wahnsinnige Mixgetränke</Headline>
      <Text>Lorem Ipsum</Text>
    </LinkTo>
  )
}

const LinkTo = styled(Link)`
  grid-area: cocktailsLink;
  display: none;
  @media only screen and (min-width: 1000px) {
    text-decoration: none;
    display: inherit;
    background-image: url(${klecks});
    background-position: center;
    background-size: 260px;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: var(--border-radius);
    background-color: white;
    color: white;
    padding: 10px;
    width: var(--main-width);
    height: 297px;
    transform: translateY(0px);
    &:hover {
      transform: translateY(-4px);
    }
    &:active {
      transform: translateY(4px);
      transition: 0.1s;
    }
  } ;
`

const Headline = styled.h2`
  height: 40px;
  font-family: 'Ventana';
  margin: 40px 0px 0px 55px;
  z-index: 20;
`

const Text = styled.p`
  text-decoration: none;
  font-family: var(--main-font);
  padding-right: 20px;
  margin: -70px 0 10px 55px;
  z-index: 20;
`

export default CocktailsLink