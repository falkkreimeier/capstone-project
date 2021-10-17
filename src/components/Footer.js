import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Wrapper>
      <Link to="/">
        <Product src="./img/painted-bottle.jpg" alt="Products" />
      </Link>
      <Link to="/motive">
        <Motiv src="./img/Logo.jpg" alt="Motive" />
      </Link>
      <Link to="/mixedDrinks">
        <Cocktails src="./img/Pinnchen.jpg" alt="Cocktails and Shots" />
      </Link>
      <DoodleHead src="./img/Portfolio.jpg" alt="The Man behind the Monster" />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: grid;
  grid-template-areas: 'product campaign cocktails doodleHead';
  align-items: center;
  margin: 0 auto;
  border-radius: 19px;
  background-color: white;
  width: var(--main-width);
  height: 5rem;
`

const Product = styled.img`
  margin-left: 10px;
  grid-area: product;
  height: 4rem;
`

const Motiv = styled.img`
  margin-left: 10px;
  grid-area: campaign;
  height: 4rem;
`

const Cocktails = styled.img`
  margin-left: 5px;
  grid-area: cocktails;
  height: 3.5rem;
`

const DoodleHead = styled.img`
  grid-area: doodleHead;
  height: 4rem;
`

export default Footer
