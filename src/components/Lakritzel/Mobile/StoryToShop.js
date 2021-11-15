import styled, { css } from 'styled-components/macro'

function StoryToShop({ flipToShop, onButtonClick }) {
  return (
    <Wrapper>
      <Headline>HILFEEEE!!!!</Headline>
      <Image src="./img/Rettemich.jpg"></Image>

      <TextMobile>
        Ich wurde gegen meinen Willen in dieser Flasche verkorkt. Hol mich hier
        raus! Ich fülle auch keinen ab ... versprochen.
      </TextMobile>

      <TextDesktop>
        Ich wurde über Nacht abgefüllt und in dieser kleinen Flasche verorkt!
        Aber du kannst was daran ändern! Hol mich hier raus, zusammen werden wir
        die Menschen auf Tischen tanzen lassen und tiefgründige Gespräche ...
        Ähh, ich meinte natürlich ganz gesittet aufs Leben anstoßen.
      </TextDesktop>

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
  grid-area: story;
  background-color: white;
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
  border-radius: var(--border-radius);
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
