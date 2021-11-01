import styled, { css } from 'styled-components/macro'
import logo from './Assets/Logo_Claim_Lakritzel.jpg'

function Header({ showWelcomeAnimation }) {
  return (
    <HeaderEl showWelcomeAnimation={showWelcomeAnimation}>
      <Wrapper>
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
  width: var(--main-width);
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 5px auto;
  border-radius: 5px;
`

const Image = styled.img`
  height: 80px;
`

export default Header
