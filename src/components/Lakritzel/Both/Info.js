import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import prost from '../Assets/Prost-Wanted-ohne-Logo.jpg'

function Info() {
  return (
    <Wrapper>
      <Image src={prost} alt="" />
      <Headline>Informationen</Headline>
      <Text>
        Falk Kreimeier <br />
        Gesundheitstraße 11
        <br />
        42699 Solingen
        <br />
        Deutschland
        <br />
        Telefon: 0152 05639742
        <br />
        E-Mail: info@lakritzel.com
        <br />
        <br />
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        128/5342/4596
        <br />
        <br />
        §36, 37 Verbraucherstreitbeilegungsgesetz
        <br />
        <br />
        Die Europäische Kommission stellt eine Plattform für die
        außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, die
        unter www.ec.europa.eu/consumers/odr aufrufbar ist. Unsere
        E-Mail-Adresse finden Sie in unserem Impressum. Wir sind weder
        verpflichtet noch bereit, an dem Streitschlichtungsverfahren
        teilzunehmen.
      </Text>
      <LinkContainer>
        <LinkTo to="agb">AGB</LinkTo>
        <LinkTo to="datenschutz">Datenschutz</LinkTo>
        <LinkToImpressum to="impressum">Impressum</LinkToImpressum>
      </LinkContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 auto;
  height: 76vh;
  width: var(--main-width);
  border-radius: var(--border-radius);
  @media (min-width: 1000px) {
    min-width: 1060px;
    height: 645px;
    display: grid;
    grid-template-areas:
      'image text'
      'image buttons';
  }
`

const Headline = styled.h2`
  position: relative;
  bottom: 75px;
  font-size: 1.5rem;
  @media (min-width: 1000px) {
    font-size: 1.8rem;
    bottom: 180px;
    left: 120px;
  }
`
const Text = styled.p`
  grid-area: text;
  font-family: var(--main-font);
  margin: 0px 0 0 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`

const Image = styled.img`
  grid-area: image;
  height: 380px;
  margin-bottom: -80px;
  @media (min-width: 1000px) {
    height: 450px;
    margin: 0 0 0 50px;
  }
`

const LinkContainer = styled.div`
  margin-top: 20px;
  grid-area: buttons;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`

const LinkTo = styled(Link)`
  font-family: Ventana;
  min-width: 250px;
  text-align: center;
  text-decoration: none;
  margin: 5px auto 0 auto;
  padding: 10px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: inset 0 0 0 2px #fff;
  transform: translateY(-4px);
  &:active {
    box-shadow: inset 0 0 1px #fff;
    transform: translateY(0px);
    transition: 0.1s;
  }
  &.active {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`

const LinkToImpressum = styled(Link)`
  font-family: Ventana;
  min-width: 250px;
  text-align: center;
  text-decoration: none;
  margin: 5px auto 0 auto;
  padding: 10px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: inset 0 0 0 2px #fff;
  transform: translateY(-4px);
  &:active {
    box-shadow: inset 0 0 1px #fff;
    transform: translateY(0px);
    transition: 0.1s;
  }
  &.active {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`

export default Info
