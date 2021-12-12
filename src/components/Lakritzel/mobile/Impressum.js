import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import kritzelkopf from '../Assets/Portfolio.jpg'

function Impressum() {
  return (
    <>
      <Wrapper>
        <Image src={kritzelkopf} alt="" />
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
        <LinkTo to="/info">ZURÜCK</LinkTo>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  width: var(--main-width);
  border-radius: var(--border-radius);
  @media only screen and (min-width: 1000px) {
    min-width: 1060px;
  }
`

const Image = styled.img`
  position: relative;
  left: 85px;
  height: 150px;
`

const Text = styled.p`
  font-family: var(--main-font);
`

const LinkTo = styled(Link)`
  text-decoration: none;
  font-family: Ventana;
  margin: 0 auto;
  padding: 10px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(0px);
  &:hover {
    transform: translateY(-4px);
  }
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

export default Impressum
