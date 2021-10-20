import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import cocktailImg from '../Lakritzel/Assets/Logo.svg'
import bottleImg from '../Lakritzel/Assets/painted-bottle.svg'
import shot from '../Lakritzel/Assets/Pinnchen.png'
import portfolio from '../Lakritzel/Assets/Portfolio.png'

function Footer() {
  return (
    <Wrapper>
      <LinkButton exact to="/" activeClassName="active">
        <Product src={bottleImg} alt="Products" />
      </LinkButton>
      <LinkButton exact to="/campaign" activeClassName="active">
        <Motiv src={cocktailImg} alt="Motive" />
      </LinkButton>
      <LinkButton exact to="/cocktails" activeClassName="active">
        <Cocktails src={shot} alt="Cocktails and Shots" />
      </LinkButton>
      <LinkButton exact to="/kritzelkopf" acrtiveClassName="active">
        <DoodleHead src={portfolio} alt="The Man behind the Monster" />
      </LinkButton>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-area: footer;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'product campaign cocktails doodleHead';
  align-items: center;
  justify-content: space-aroud;
  margin: 0 auto;
  border-radius: 19px;
  width: var(--main-width);
  height: 90px;
`

const Product = styled.img`
  margin-top: 5px;
  grid-area: product;
  height: 3.5rem;
`

const LinkButton = styled(NavLink)`
  position: relative;
  left: 8px;
  top: 10px;
  width: 70px;
  height: 70px;

  &:hover {
    background-color: none;
    border: 1px solid grey;
    border-radius: 50%;
    box-shadow: 5px 0px 2px 2px grey;
  }

  &.active {
    background-color: none;
    border-radius: 50%;
    border: 1px solid grey;
    box-shadow: 5px 0px 2px 2px black;
  }
`

const Motiv = styled.img`
  margin-left: 10px;
  grid-area: campaign;
  height: 4rem;
`

const Cocktails = styled.img`
  position: relative;
  top: 7px;
  right: 8px;
  grid-area: cocktails;
  height: 3.5rem;
`

const DoodleHead = styled.img`
  grid-area: doodleHead;
  height: 4rem;
`

export default Footer
