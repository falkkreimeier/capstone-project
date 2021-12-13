import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function LinkToCV() {
  return (
    <Wrapper>
      <Headline>Mein Lebenslauf</Headline>
      <Text>
        IT-Systemkaufmann, Autovermieter, Werbetexter, Schnapshändler und
        Web-Developer. <br /> <br /> Man könnte sagen, ich haben viele Seiten
        und das hier ist eine davon. Alle anderen findet ihr in meinem
        Lebenslauf:
      </Text>
      <LinkToCV1 to="/cvPageOne">Zu meinem Lebenslauf</LinkToCV1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: linktocv;
  border-radius: var(--border-radius);
  background-color: white;
  @media (max-width: 1000px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
    height: 250px;
  }
`

const Headline = styled.h2`
  margin-bottom: 10px;
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`

const Text = styled.p`
  font-size: 15px;
  padding: 0 65px;
  font-family: var(--main-font);
  @media (max-width: 1000px) {
    padding: 0px 70px;
    font-size: 14px;
  }
`

const LinkToCV1 = styled(Link)`
  margin: 30px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  border-radius: 40px;
  background-color: black;
  font-family: var(--main-font);
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
  @media (max-width: 1000px) {
    background-color: white;
    color: black;
    transform: translateY(-4px);
    &:active {
      transform: translateY(-0px);
      transition: 0.1s;
    }
  }
`

export default LinkToCV
