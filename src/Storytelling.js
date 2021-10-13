import styled, { css } from 'styled-components'

function Storytelling() {
  return (
    <Wrapper>
      <Image src="./img/Rettemich.jpg"></Image>
      <Headline>Hilf mir!</Headline>
      <Text>
        Dieser übergeschnapste Kritzelkopf hat mich über Nacht abgefüllt und in
        dieser kleinen Flasche verkorkt. Hol mich hier raus, drücke einfach
        diesen kleinen Button ...
      </Text>
      <Button>Befreie Lakritzel (auf eigenen Gefahr!!!)</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  width: var(--main-width);
  height: 51rem;
  border-radius: 19px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'headline'
    'image'
    'text';
`

const Image = styled.img`
  margin: 0 auto;
  position: relative;
  bottom: 20px;
  border-radius: 20px;
  grid-area: image;
  height: 12rem;
`

const Headline = styled.h2`
  font-size: 3rem;
  text-align: center;
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

const Button = styled.button`
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  width: 18rem;
  height: 18rem;
  font-size: 1rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
  }
`

export default Storytelling
