import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import cocktailImg from '../Lakritzel/Assets/Logo.svg'
import bottleImg from '../Lakritzel/Assets/painted-bottle.svg'
import shot from '../Lakritzel/Assets/Pinnchen.png'
import portfolio from '../Lakritzel/Assets/Portfolio.png'

function Footer() {
  return (
    <Wrapper>
      <Navigation exact to="/" activeClassName="active">
        <Image src={bottleImg} alt="Products" />
      </Navigation>
      <Navigation exact to="/campaign" activeClassName="active">
        <Image src={cocktailImg} alt="Motive" />
      </Navigation>
      <Navigation exact to="/cocktails" activeClassName="active">
        <Image src={shot} alt="Cocktails and Shots" />
      </Navigation>
      <Navigation exact to="/kritzelkopf" acrtiveClassName="active">
        <Image src={portfolio} alt="The Man behind the Monster" />
      </Navigation>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  border-radius: 19px;
  width: var(--main-width);
  min-height: 80px;
`

const Image = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  object-fit: contain;
`

const Navigation = styled(NavLink)`
  &:hover {
    background-color: none;
    border-radius: 50%;
    box-shadow: 5px 0px 2px 2px grey;
  }

  &.active {
    background-color: none;
    border-radius: 50%;
    box-shadow: 5px 0px 2px 2px black;
  }
`

export default Footer
