import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import StoryToShop from './StoryToShop'
import OrderingForm from './OrderingForm'

function Shop({ handleAddOrder }) {
  const [flipToShop, setFlipToShop] = useState(false)
  function flipToShopButton() {
    setFlipToShop(!flipToShop)
  }
  return (
    <Container>
      <FlipCard flipToShop={flipToShop}>
        <FlipCardFront>
          <StoryToShop />
          <ButtonFront onClick={flipToShopButton}>
            Lakritzel befreien
            <Text>(Vorsicht! Kann abfüllend wirken.)</Text>
          </ButtonFront>
        </FlipCardFront>

        <FlipCardBack>
          <OrderingForm onAddOrder={handleAddOrder} />
          <ButtonBack onClick={flipToShopButton}>
            <TextButtonSmall>ZURÜCK</TextButtonSmall>
          </ButtonBack>
        </FlipCardBack>
      </FlipCard>
    </Container>
  )
}

const Container = styled.div`
  height: 37.5rem;
  perspective: 1000px;
`

const FlipCard = styled.section`
  display: flex;
  justify-content: center;
  padding: 0px;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  ${({ flipToShop }) =>
    flipToShop &&
    css`
      transform: rotateY(180deg);
    `}
`

const FlipCardFront = styled.section`
  background-color: white;
  width: var(--main-width);
  backface-visibility: hidden;
  position: absolute;
  border-radius: 25px;
`

const FlipCardBack = styled.section`
  height: 19rem;
  width: var(--main-width);
  background-color: white;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  border: 1px solid black;
  border-radius: 25px;
`
const ButtonFront = styled.button`
  backface-visibility: hidden;
  position: relative;
  bottom: 20px;
  left: 30px;
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  width: 18rem;
  height: 12rem;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
  }
`
const ButtonBack = styled.button`
  backface-visibility: hidden;
  position: relative;
  bottom: 570px;
  left: 20px;
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  width: 4.5rem;
  height: 1rem;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
  }
`

const Text = styled.p`
  font-size: 1rem;
`

const TextButtonSmall = styled.p`
  font-size: 0.7rem;
  margin: 0 auto;
`
export default Shop
