import styled from 'styled-components/macro'
import klecks from '../Assets/Kleckse_clean.jpg'

function CocktailsLink() {
  return (
    <Wrapper>
      <Headline>Wahnsinnige Mixgetränke</Headline>
      <Text>
        Der übergeschnapste Tropfen treibt nicht nur Menschen in den Wahnsinn,
        sonder auch diese ausgefallenen Cocktail und Shot Rezepte.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: cocktailsLink;
  display: none;
  @media only screen and (min-width: 1000px) {
    text-decoration: none;
    display: inherit;
    background-image: url(${klecks});
    background-position: center;
    background-size: 320px;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: var(--border-radius);
    background-color: white;
    color: white;
    padding: 10px;
    width: var(--main-width);
    min-height: 300px;
  }
`

const Headline = styled.h2`
  height: 40px;
  font-family: 'Ventana';
  margin: 50px 0px 0px 40px;
  z-index: 20;
`

const Text = styled.p`
  text-decoration: none;
  font-family: var(--main-font);
  padding-right: 20px;
  margin: -100px 0 10px 40px;
  z-index: 20;
`

export default CocktailsLink
