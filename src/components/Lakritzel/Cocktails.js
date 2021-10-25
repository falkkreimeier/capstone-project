import styled from 'styled-components/macro'
import klecks from './Assets/Kleckse_clean.jpg'

function Cocktails({ name, ingredients, preparation }) {
  return (
    <Wrapper>
      <Headline>{name}</Headline>
      <Subline>Zutaten:</Subline>
      <Text>{ingredients}</Text>
      <Subline>Zubereitung:</Subline>
      <Text>{preparation}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${klecks});
  background-position: center;
  background-size: 21rem;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 10px;
  width: var(--main-width);
  min-height: 22rem;
  gap: 5px;
  &:nth-child(even) {
    background-image: none;
    color: black;
  }
`

const Headline = styled.h2`
  height: 40px;
  font-family: 'Ventana';
  margin: 40px auto 0px auto;
  z-index: 20;
`

const Subline = styled.h4`
  font-family: var(--main-headline);
  margin-bottom: 5px;
  margin: 0px 0 0 30px;
  z-index: 20;
`

const Text = styled.p`
  font-family: var(--main-font);
  padding-right: 20px;
  margin: 0px 0 10px 30px;
  z-index: 20;
`
export default Cocktails
