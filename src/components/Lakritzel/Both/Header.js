import styled, { css } from 'styled-components/macro'
import logo from '../Assets/Logo-lettering.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

function Header({
  showWelcomeAnimation,
  count,
  onFlipToShoppingCartButtonClick,
}) {
  return (
    <HeaderEl showWelcomeAnimation={showWelcomeAnimation}>
      <Wrapper>
        <Image src={logo} alt="Lakritzel App" />
        <LinkToShop to="/">
          <IconPosition>
            <IconContext.Provider
              value={{
                size: '25px',
              }}
            >
              <FaShoppingCart onClick={onFlipToShoppingCartButtonClick} />
            </IconContext.Provider>
          </IconPosition>
        </LinkToShop>
        <Quantity>{count}</Quantity>
      </Wrapper>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
  grid-area: header;
  position: fixed;
  background-color: black;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  ${({ showWelcomeAnimation }) =>
    showWelcomeAnimation &&
    css`
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: fallDown;
      animation-fill-mode: forwards;
      @keyframes fallDown {
        from {
          transform: translatey(-900px);
        }

        to {
          transform: translateY(0px);
        }
      }
    `}
  @media only screen and (min-width: 1000px) {
    position: static;
    margin: 0 auto 4px auto;
  }
`

const Wrapper = styled.section`
  grid-area: header;
  width: var(--main-width);
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 5px auto;
  @media only screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 1063px;
  }
`

const Image = styled.img`
  position: relative;
  left: 20px;
  height: 90px;
  padding: 10px;
  @media (min-width: 1000px) {
    position: static;
  }
`

const IconPosition = styled.div`
  position: relative;
  left: 80px;
  top: 10px;
  @media (min-width: 1000px) {
    left: 420px;
  }
`

const Quantity = styled.div`
  position: relative;
  left: 65px;
  top: 35px;
  @media (min-width: 1000px) {
    left: 405px;
    top: 35px;
  }
`

const LinkToShop = styled(Link)`
  color: black;
`

export default Header
