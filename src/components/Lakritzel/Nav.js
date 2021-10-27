import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart as Shop } from 'react-icons/fa'
import { CgProfile as Profile } from 'react-icons/cg'
import { AiFillPicture as Picture } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { FaCocktail as Cocktail } from 'react-icons/fa'

function Nav() {
  return (
    <Navigation>
      <NavigationLink exact to="/" activeClassName="active">
        <IconContext.Provider
          value={{
            color: 'black',
            size: '25px',
          }}
        >
          <Shop />
        </IconContext.Provider>
      </NavigationLink>
      <NavigationLink exact to="/campaign" activeClassName="active">
        <IconContext.Provider
          value={{
            color: 'black',
            size: '25px',
          }}
        >
          <Picture />
        </IconContext.Provider>
      </NavigationLink>
      <NavigationLink exact to="/cocktails" activeClassName="active">
        <IconContext.Provider
          value={{
            color: 'black',
            size: '25px',
          }}
        >
          <Cocktail />
        </IconContext.Provider>
      </NavigationLink>
      <NavigationLink exact to="/kritzelkopf" activeClassName="active">
        <IconContext.Provider
          value={{
            color: 'black',
            size: '25px',
          }}
        >
          <Profile />
        </IconContext.Provider>
      </NavigationLink>
    </Navigation>
  )
}

const Navigation = styled.nav`
  // position: fixed;
  // left: 50%;
  // transform: translate(-50%);
  // top: 92%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 3px auto 8px auto;
  border-radius: 19px;
  width: var(--main-width);
  min-height: 40px;
`

const NavigationLink = styled(NavLink)`
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

export default Nav
