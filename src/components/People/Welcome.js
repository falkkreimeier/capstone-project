import styled from 'styled-components/macro'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function Welcome() {
  return (
    <Wrapper>
      <Headline>Kleine Fische, große Wirkung.</Headline>
      <Text>
        40 lange Jahre habe ich geglaubt, dass jeder, der sagt: "Ich liebe
        meinen Job!", lügt. <br /> <br />
        Ich habe mich geirrt, denn ich bin mal wieder ins kalte Wasser
        gesprungen und im Talentpool von neuefische gelandet.
        <br /> <br /> Hier habe ich das Programmieren für mich entdeckt, und
        auch wenn ich noch ein kleiner Programmier-Fisch bin – bald möchte ich
        als riesen Pottwal die 7-Quellcode Weltmeere erobern.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: welcome;
  background-color: white;
  color: black;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media (max-width: 1000px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
    padding: 0 60px;
  }
`

export const Text = styled.p`
  font-size: 17px;
  font-family: var(--main-font);
  margin: -10px 20px 20px 20px;
  @media (max-width: 1000px) {
    font-size: 13px;
    margin: -10px 0;
    padding: 0 15px;
  }
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  @media (max-width: 1000px) {
    margin: 45px 20px 20px 20px;
    color: white;
  }
`

export default Welcome
