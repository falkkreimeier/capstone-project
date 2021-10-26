import styled, { css } from 'styled-components'
import logo from './Assets/Logo-lettering.jpg'
import crazy from './Assets/Übergeschnapst.jpg'

function AgeGate({ onAgeButtonClick, ageVerified }) {
  function over18Handler() {
    onAgeButtonClick(true)
  }
  function under18Handler() {
    onAgeButtonClick(false)
  }
  return (
    <Wrapper activeClassName="active" ageVerified={ageVerified}>
      <CardContainer>
        <LogoImg src={logo} alt="Lakritzel Logo" activeClassName="active" />
        <Text>
          Um Zugang zu dieser Seite zu bekommen, musst du mindestens 18 Jahre
          alt sein!
        </Text>
        <Button onClick={over18Handler}>Ich bin schon über 18</Button>
        <Button onClick={under18Handler}>Ich bin noch keine 18</Button>
        <Image src={crazy} alt="" />
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100%;
  z-index: 50;
  ${({ ageVerified }) =>
    ageVerified &&
    css`
      animation-duration: 3s;
      animation-name: fallDown;
      animation-fill-mode: forwards;
      @keyframes fallDown {
        from {
          transform: translatey(0px);
        }

        to {
          transform: translateY(-800px);
          visibility: invisible;
        }
      }
    `}
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  align-items: center;
  margin: 0 auto;
  width: 20rem;
  height: 30rem;
  background-color: white;
`

const LogoImg = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 6rem;
`
const Image = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 14rem;
`

const Button = styled.button`
  font-family: var(--main-font);
  text-align: center;
  border-radius: 19px;
  background-color: black;
  margin: 5px;
  width: 10rem;
  height: 1.5rem;
  color: white;
`

const Text = styled.p`
  text-align: center;
  margin: 0 auto 10px auto;
  font-family: var(--main-font);
`

export default AgeGate
