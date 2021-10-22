import styled, { css } from 'styled-components'

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
  background-color: white;
  width: var(--main-width);
  height: auto;
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
  border: none;
  background-color: black;
  color: white;
  width: 12rem;
  height: 4.5rem;
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

export default StoryToShop
