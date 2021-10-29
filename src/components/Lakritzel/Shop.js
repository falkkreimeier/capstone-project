import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import StoryToShop from './StoryToShop'
import OrderingForm from './OrderingForm'

function Shop({ onAddOrder }) {
  const [flipToShop, setFlipToShop] = useState(false)
  function flipToShopButton() {
    setFlipToShop(!flipToShop)
  }
  return (
    <Container>
      <FlipCard flipToShop={flipToShop}>
        <FlipCardFront>
          <StoryToShop
            flipToShop={flipToShop}
            onButtonClick={flipToShopButton}
          />
        </FlipCardFront>

        <FlipCardBack>
          <OrderingForm
            onAddOrder={onAddOrder}
            onButtonClick={flipToShopButton}
            flipToShop={flipToShop}
          />
        </FlipCardBack>
      </FlipCard>
    </Container>
  )
}

const Container = styled.div`
  --card-height: 520px;
  margin: 0 auto;
  width: var(--main-width);
  border-radius: var(--border-radius);
  height: var(--card-height);
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
  height: var(--card-height);
  background-color: white;
  width: var(--main-width);
  backface-visibility: hidden;
  position: absolute;
  border-radius: var(--border-radius);
  height: var(--card-height);
`

const FlipCardBack = styled.section`
  height: var(--card-height);
  width: var(--main-width);
  background-color: white;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  border: 1px solid black;
  border-radius: var(--border-radius);
`

export default Shop
