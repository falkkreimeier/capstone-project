import styled, { css } from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

function Nav({ showWelcomeAnimation }) {
  return (
    <Footer showWelcomeAnimation={showWelcomeAnimation}>
      <Navigation>
        <NavigationLink exact to="/" activeClassName="active">
          Shop
        </NavigationLink>
        <NavigationLink exact to="/campaign" activeClassName="active">
          Pics
        </NavigationLink>
        <NavigationLink exact to="/cocktails" activeClassName="active">
          Drinks
        </NavigationLink>
        <NavigationLink exact to="/Info" activeClassName="active">
          Info
        </NavigationLink>
      </Navigation>
    </Footer>
  )
}

const Footer = styled.footer`
  grid-area: nav;
  position: fixed;
  border-radius: 5px;
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
  @media screen and (min-width:1000px) {
    position: static;
    margin: 0px 5px 10px 5px;
    width: auto;
  }
`

const Navigation = styled.nav`
  grid-area: nav;
  height: 80px;
  width: var(--main-width);
  background-color: white;
  display: flex;
  align-items: center;
  margin: 5px auto;
  min-height: 40px;
  border-radius: 5px;
  @media screen and (min-width: 1000px) {
    margin: 4px auto 0 auto;
    width: 1060px;
  }
`

const NavigationLink = styled(NavLink)`
  font-family: Ventana;
  min-width: 60px;
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

export default Nav
