import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cocktailImg from '../Assets/Logo.jpg'
import bottleImg from '../Assets/painted-bottle.jpg'
import shot from '../Assets/Pinnchen.jpg'
import portfolio from '../Assets/Portfolio.jpg'

function Footer() {
  return (
    <Wrapper>
      <Link to="/">
        <Product src={bottleImg} alt="Products" />
      </Link>
      <Link to="/campaign">
        <Motiv src={cocktailImg} alt="Motive" />
      </Link>
      <Link to="/cocktails">
        <Cocktails src={shot} alt="Cocktails and Shots" />
      </Link>
      <DoodleHead src={portfolio} alt="The Man behind the Monster" />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-areas: 'product campaign cocktails doodleHead';
  align-items: center;
  margin: 0 auto;
  border-radius: 19px;
  background-color: white;
  width: var(--main-width);
  margin-top: 5px;
  height: 100px;
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
