import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart as Shop } from 'react-icons/fa'
import { CgProfile as Profile } from 'react-icons/cg'
import { AiFillPicture as Picture } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { FaCocktail as Cocktail } from 'react-icons/fa'

function Nav({ showWelcomeAnimation }) {
  return (
    <Footer showWelcomeAnimation={showWelcomeAnimation}>
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
    </Footer>
  )
}

const Footer = styled.footer`
  position: fixed;
  background-color: black;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  ${({ showWelcomeAnimation }) =>
    showWelcomeAnimation &&
    css`
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: pullUp;
      animation-fill-mode: forwards;
      @keyframes pullUp {
        from {
          transform: translatey(900px);
        }

        to {
          transform: translateY(0px);
        }
      }
    `}
`

const Navigation = styled.nav`
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px auto;
  border-radius: var(--border-radius);
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
