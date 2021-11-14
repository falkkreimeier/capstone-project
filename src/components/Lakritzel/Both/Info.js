import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import prost from '../Assets/Prost-Wanted.jpg'

function Info() {
  return (
    <Wrapper>
      <Image src={prost} alt="" />
      <Headline>Informationen</Headline>
      <LinkTo to="agb">AGB</LinkTo>
      <LinkTo to="datenschutz">Datenschutz</LinkTo>
      <LinkTo to="impressum">Impressum</LinkTo>
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
  padding: 20px;
  width: var(--main-width);
  border-radius: var(--border-radius);
  @media only screen and (min-width: 1000px) {
    min-width: 1060px;
  }
`

const Headline = styled.h2``

const Image = styled.img`
  height: 350px;
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

export default Info
