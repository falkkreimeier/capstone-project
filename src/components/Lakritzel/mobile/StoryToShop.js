import styled, { css } from 'styled-components/macro'
import ShoppingCard from './ShoppingCart'

function StoryToShop({
  flipToShop,
  count,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
  onShoppingCardButton,
  showShoppingCard,
  setShowShoppingCard,
}) {
  if (showShoppingCard) {
    return (
      <ShoppingCard
        onHandleChange={onHandleChange}
        count={count}
        onShoppingCardButton={onShoppingCardButton}
        ClickUpHandler={ClickUpHandler}
        ClickDownHandler={ClickDownHandler}
      />
    )
  }

  return (
    <Wrapper>
      <Headline>HILFEEEE!!!!</Headline>
      <Image src="./img/Rettemich.jpg"></Image>

      <TextMobile>
        Ich wurde in dieser Flasche eingesperrt, nur weil ich ein bisschen
        übergeschnapst bin. Hol mich hier raus! Ich fülle auch keinen ab ...
        versprochen.
      </TextMobile>

      <TextDesktop>
        Ich wurde über Nacht abgefüllt und in dieser Flasche eingesperrt! Mir
        wird vorgeworfen, total übergeschnapst zu sein, aber ich bin unschuldig!
        Hol mich hier raus, ich fülle auch keinen ab ... versprochen.
      </TextDesktop>

      <ButtonFront onClick={onShoppingCardButton}>Rette mich</ButtonFront>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  grid-area: shop;
  --card-height: 500px;
  margin: 5px auto;
  width: var(--main-width);
  border-radius: var(--border-radius);
  height: var(--card-height);
  perspective: 1000px;
  @media (min-width: 1000px) {
    --card-height: 645px;
    margin: 0 auto;
  }
`

const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 20px;
  grid-area: image;
  height: 192px;
`

const Headline = styled.h2`
  margin: 0 auto;
  font-size: 3rem;
  padding-top: 20px;
  font-family: Ventana;
`

const TextMobile = styled.p`
  font-family: var(--main-font);
  font-size: 1.2rem;
  width: 350px;
  margin: 0 0 20px 0;
  padding: 0 30px;
  text-align: center;
  grid-area: text;
  @media (min-width: 1000px) {
    display: none;
  }
`

const TextDesktop = styled.p`
  display: none;
  @media (min-width: 1000px) {
    display: inline;
    font-family: var(--main-font);
    font-size: 1.2rem;
    width: 350px;
    margin: 0 0 20px 0;
    padding: 0 30px;
    text-align: center;
    grid-area: text;
  }
`

const ButtonFront = styled.button`
  font-family: Ventana;
  backface-visibility: hidden;
  margin: 0 auto;
  padding-top: 3px;
  background-color: black;
  color: white;
  height: 40px;
  width: 192px;
  font-size: 1.5rem;
  border-radius: 19px;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
  ${({ flipToShop }) =>
    flipToShop &&
    css`
      pointer-events: none;
    `}
`

export default StoryToShop
