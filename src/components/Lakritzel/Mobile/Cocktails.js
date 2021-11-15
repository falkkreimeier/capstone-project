import styled from 'styled-components/macro'
import klecks from '../Assets/Kleckse_clean.jpg'

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
  background-size: 336px;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin: 5px auto;
  background-color: white;
  color: white;
  padding: 10px;
  width: var(--main-width);
  height: 352px;
  gap: 5px;
  &:nth-child(even) {
    background-image: none;
    color: black;
  }
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1000px) {
    margin: 0;
    max-height: 320px;
    background-size: 300px;
    width: 530px;
  }
`

const Headline = styled.h2`
  height: 40px;
  font-family: 'Ventana';
  margin: 40px 0px 0px 30px;
  z-index: 20;
  @media (min-width: 1000px) {
    padding: 0px 100px 0px 95px;
  }
`

const Subline = styled.h4`
  font-family: var(--main-headline);
  margin: 0 0 5px 30px;
  z-index: 20;
  @media only screen and (min-width: 1000px) {
    padding: 0px 100px 0px 95px;
  }
`

const Text = styled.p`
  font-family: var(--main-font);

  margin: 0px 25px 10px 30px;
  z-index: 20;
  @media only screen and (min-width: 1000px) {
    font-size: 15px;
    /* margin: 0px 150px 10px 90px; */
    padding: 0px 100px 0px 95px;
  }
`
export default Cocktails
