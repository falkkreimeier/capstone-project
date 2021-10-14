import styled, { css } from 'styled-components'

function StoryToShop() {
  return (
    <Wrapper>
      <Image src="./img/Rettemich.jpg"></Image>
      <Headline>Hilf mir!</Headline>
      <Text>
        Dieser übergeschnapste Kritzelkopf hat mich über Nacht abgefüllt und in
        dieser kleinen Flasche verkorkt. Rette mich!
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  width: var(--main-width);
  height: 25rem;
  border-radius: 19px;
  margin: 0 auto;
  align-items: flex-start;
  display: grid;
  grid-template-rows: 0.1fr 0.2fr 0.5fr;
  grid-template-areas:
    'headline'
    'image'
    'text';
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
  padding: 0;
  grid-area: headline;
  font-family: Ventana;
`

const Text = styled.p`
  font-family: Ventana;
  font-size: 1.5rem;
  width: 350px;
  margin: 0 0 20px 0;
  text-align: center;
  grid-area: text;
`

export default StoryToShop
