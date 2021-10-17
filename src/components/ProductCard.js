import styled, { css } from 'styled-components/macro'
import { useState } from 'react'

function ProductCard(props) {
  const [flipToDetails, setFlipToDetails] = useState(false)
  function flipToDetailsButton() {
    setFlipToDetails(!flipToDetails)
  }

  return (
    <Container>
      <FlipCard flipToDetails={flipToDetails}>
        <FlipCardFront>
          <Image src={props.image} alt="" />
          <Price>{props.price}</Price>
          <ButtonFront onClick={flipToDetailsButton}>
            Was ist da drin?!
          </ButtonFront>
        </FlipCardFront>

        <FlipCardBack>
          <Logo src={props.logo} alt="Lakritzel" />
          <Text>{props.description}</Text>
          <Headline>Wahnsinniger Inhalt</Headline>
          <Details>
            <List>{props.ingredients}</List>
            <List>{props.alcohol}</List>
            <List>{props.mount}</List>
          </Details>
          <ButtonBack onClick={flipToDetailsButton}>
            <TextButton>ZURÜCK</TextButton>
          </ButtonBack>
        </FlipCardBack>
      </FlipCard>
    </Container>
  )
}

const Container = styled.div`
  height: 19rem;
  perspective: 1000px;
`

const FlipCard = styled.section`
  display: flex;
  justify-content: center;
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
  width: var(--main-width);
  backface-visibility: hidden;
  position: absolute;
  border-radius: var(--border-radius);
  display: grid;
  grid-template-areas:
    'image price'
    'image button';
`

const Image = styled.img`
  grid-area: image;
  height: 19rem;
  border-radius: 19px;
  margin: 0;
`

const Price = styled.div`
  width: 85px;
  height: 50px;
  backface-visibility: hidden;
  position: relative;
  top: 40px;
  right: 90px;
  font-family: Ventana;
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
  height: 19rem;
  width: var(--main-width);
  background-color: white;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  border: 1px solid black;
  border-radius: var(--border-radius);
  display: grid;
  grid-template-areas:
    'logo portrait'
    'details button';
`

const ButtonBack = styled.button`
  backface-visibility: hidden;
  position: relative;
  bottom: 208px;
  right: 330px;
  grid-area: button;
  text-decoration: none;
  text-align: center;
  width: 5rem;
  height: 1rem;
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
  height: 8rem;
`

const Text = styled.p`
  width: 200px;
  margin: 40px 20px 0 -180px;
  grid-area: portrait;
`

const Headline = styled.h2`
  grid-area: details;
  padding-left: 50px;
  margin: -40px -10px; ;
`

const Details = styled.ol`
  margin: -10px 15px;
  grid-area: details;
`

const TextButton = styled.p`
  font-size: 0.7rem;
  margin: 0 auto;
`

const List = styled.li`
  width: 260px;
`

export default ProductCard
