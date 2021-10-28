import styled, { css } from 'styled-components/macro'

function StoryToShop({ flipToShop, onButtonClick }) {
  return (
    <Wrapper>
      <Headline>HILFEEEE!!!!</Headline>
      <Image src="./img/Rettemich.jpg"></Image>

      <Text>
        Dieser verkorkste Kritzelkopf hat mich in dieser kleinen Flasche
        verkorkt. Hol mich hier raus, ich fülle auch keinen ab, versprochen ...
      </Text>
      <ButtonFront
        disabled={flipToShop}
        flipToShop={flipToShop}
        onClick={onButtonClick}
      >
        Rette Lakritzel
      </ButtonFront>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  --card-height: 19rem;
  background-color: white;
  width: var(--main-width);
  height: var(--card-height);
  border-radius: var(--border-radius);
  margin: 0 auto;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 20px;
  grid-area: image;
  height: 12rem;
`

const Headline = styled.h2`
  margin: 0 auto;
  font-size: 3rem;
  padding-top: 25px;
  grid-area: headline;
  font-family: Ventana;
`

const Text = styled.p`
  font-family: var(--main-font);
  font-size: 1.2rem;
  width: 350px;
  margin: 0 0 20px 0;
  padding: 0 30px;
  text-align: center;
  grid-area: text;
`

const ButtonFront = styled.button`
  font-family: Ventana;
  letter-spacing: 2px;
  margin-bottom: 5px;
  backface-visibility: hidden;
  margin: 0 auto;
  padding-top: 5px;
  background-color: black;
  color: white;
  width: 12rem;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
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
