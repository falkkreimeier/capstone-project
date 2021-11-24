import styled, { css } from 'styled-components/macro'
import StoryToShop from './StoryToShop'
import ShoppingCard from '../Both/ShoppingCart'

function Shop({
  onFlipToShopButtonClick,
  flipToShop,
  count,
  setCount,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
}) {
  return (
    <Container>
      <FlipCard flipToShop={flipToShop}>
        <FlipCardFront>
          <StoryToShop
            flipToShop={flipToShop}
            onFlipToShopButtonClick={onFlipToShopButtonClick}
          />
        </FlipCardFront>

        <FlipCardBack>
          <ShoppingCard
            onHandleChange={onHandleChange}
            ClickUpHandler={ClickUpHandler}
            ClickDownHandler={ClickDownHandler}
            count={count}
            setCount={setCount}
            onFlipToShopButtonClick={onFlipToShopButtonClick}
          />
        </FlipCardBack>
      </FlipCard>
    </Container>
  )
}

const Container = styled.div`
  grid-area: shop;
  --card-height: 500px;
  margin: 2px auto;
  width: var(--main-width);
  border-radius: var(--border-radius);
  height: var(--card-height);
  perspective: 1000px;
  @media (min-width: 1000px) {
    --card-height: 645px;
    margin: 0 auto;
  }
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
