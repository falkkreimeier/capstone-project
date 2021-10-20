import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import StoryToShop from './StoryToShop'
import OrderingForm from './OrderingForm'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
          <ButtonFront flipToShop={flipToShop} onClick={flipToShopButton}>
            Rette Lakritzel
          </ButtonFront>
        </FlipCardFront>

        <FlipCardBack>
          <OrderingForm onAddOrder={handleAddOrder} />
          <IconPosition flipToShop={flipToShop}>
            <IconContext.Provider
              value={{
                color: 'black',
                size: '30px',
              }}
            >
              <FaArrowCircleLeft onClick={flipToShopButton} />
            </IconContext.Provider>
          </IconPosition>
        </FlipCardBack>
      </FlipCard>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: var(--main-width);
  border-radius: var(--border-radius);
  height: 34rem;
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
  border-radius: var(--border-radius);
  height: 34rem;
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
  height: 34rem;
`
const ButtonFront = styled.button`
  backface-visibility: hidden;
  position: relative;
  bottom: 20px;
  left: 80px;
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  width: 12rem;
  height: 8rem;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 15px 15px 15px 8px grey;
    ${({ flipToShop }) =>
      flipToShop &&
      css`
        pointer-events: none;
      `}
  }
`

const IconPosition = styled.div`
  position: relative;
  left: 290px;
  bottom: 30px;
`

export default Shop
