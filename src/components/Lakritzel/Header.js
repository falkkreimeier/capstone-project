import styled, { css } from 'styled-components/macro'
import logo from './Assets/Logo_Claim_Lakritzel.jpg'
import fisch from './Assets/Klammerfisch_bw.png'

function Header({ showWelcomeAnimation }) {
  return (
    <HeaderEl showWelcomeAnimation={showWelcomeAnimation}>
      <Wrapper>
        <Logo src={fisch} alt="" />
        <Image src={logo} alt="Lakritzel App" />
      </Wrapper>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
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
`

const Wrapper = styled.section`
  margin: 5px auto;
  border-radius: var(--border-radius);
  background-color: white;
  width: var(--main-width);
`

const Image = styled.img`
  position: relative;
  left: 50px;
  text-align: center;
  height: 80px;
`

const Logo = styled.img`
  position: relative;
  left: 260px;
  bottom: 15px;
  height: 40px;
`

export default Header
