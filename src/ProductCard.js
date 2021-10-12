import styled, { css } from 'styled-components'
import { useState } from 'react'

function ProductCard(props) {
  const [flipToDetails, setFlipToDetails] = useState(false)
  function flipToDetailsButton() {
    setFlipToDetails(!flipToDetails)
  }

  return (
    <FlipCard flipToDetails={flipToDetails}>
      <FlipCardFront>
        <Image src={props.image} alt="Lakritzel bottle" />
        <Price>{props.price}</Price>
        <ButtonFront onClick={flipToDetailsButton}>Was 'n das?!</ButtonFront>
      </FlipCardFront>

      <FlipCardBack>
        <Logo src={props.logo} alt="Lakritzel Logo" />
        <Text>
          Total übergeschnapster Lakritzlikör. VORSICHT: Kann abfüllend wirken.
        </Text>
        <Details>
          <Headline>{props.claim}</Headline>
          <List>{props.ingredients}</List>
          <List>{props.alcohol}</List>
          <List>{props.mount}</List>
        </Details>
        <ButtonBack onClick={flipToDetailsButton}>Produkt</ButtonBack>
      </FlipCardBack>
    </FlipCard>
  )
}

const FlipCard = styled.section`
  display: flex;
  justify-content: center;
  perspective: 1000px;
  padding: 0px;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  ${({ flipToDetails }) =>
    flipToDetails &&
    css`
      transform: rotateY(180deg);
    `}
`

const FlipCardFront = styled.section`
  background-color: white;
  height: 20rem;
  width: 22rem;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    'image price'
    'image button';
`

const Image = styled.img`
  grid-area: image;
  height: 20rem;
  border-radius: 15px;
  margin: 0;
`

const Price = styled.div`
  width: 85px;
  height: 50px;
  backface-visibility: hidden;
  position: relative;
  top: 40px;
  right: 90px;
  font-family: wisdom;
  grid-area: price;
  font-size: 3rem;
`

const ButtonFront = styled.button`
  backface-visibility: hidden;
  position: relative;
  top: 100px;
  right: 120px;
  grid-area: button;
  text-decoration: none;
  text-align: center;
  width: 90px;
  height: 35px;
  margin: 14px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 5px 5px 5px 2px grey;
  &:hover  {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`

const FlipCardBack = styled.section`
  height: 20rem;
  width: 22rem;
  background-color: white;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    'logo portrait'
    'details details';
`

const ButtonBack = styled.button`
  backface-visibility: hidden;
  position: relative;
  bottom: 35px;
  right: 140px;
  grid-area: button;
  text-decoration: none;
  text-align: center;
  width: 90px;
  height: 25px;
  margin: 14px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 5px 5px 5px 2px grey;
  &:hover  {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`
const Logo = styled.img`
  margin: 20px 0 0 30px;
  grid-area: logo;
  height: 10rem;
`

const Text = styled.p`
  width: 200px;
  margin: 40px 0 0 10px;
  grid-area: portrait;
`

const Headline = styled.h2`
  margin: 0;
`

const Details = styled.ul`
  grid-area: details;
`

const List = styled.li`
  width: 260px;
  list-style: none;
`

export default ProductCard
