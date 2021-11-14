import styled from 'styled-components/macro'
import logo from '../Assets/Logo_nobackground.png'
import crazy from '../Assets/Rettemich-nobackground.png'

function AgeGate({ onAgeButtonClick, ageVerified }) {
  function over18Handler() {
    onAgeButtonClick(true)
  }
  function under18Handler() {
    onAgeButtonClick(false)
  }
  return (
    <Wrapper ageVerified={ageVerified}>
      <CardContainer>
        <LogoImg src={logo} alt="Lakritzel Logo" activeClassName="active" />
        <Text>
          Um Zugang zu dieser Seite zu bekommen, musst du mindestens 18 Jahre
          alt sein!
        </Text>
        <Button activeClassName="active" onClick={over18Handler}>
          Ich bin schon über 18
        </Button>
        <Button activeClassName="active" onClick={under18Handler}>
          Ich bin noch keine 18
        </Button>
        <HeadlineImage>Total übergeschnapst</HeadlineImage>
        <Image src={crazy} alt="" />
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100%;
  z-index: 50;
`

const CardContainer = styled.div`
  box-shadow: inset 0px 0px 30px 0px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  margin: 0 auto;
  width: 320px;
  height: 480px;
  background-color: white;
`

const LogoImg = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 96px;
`

const HeadlineImage = styled.h2`
  margin: 10px auto -5px auto;
  font-size: 1rem;
  padding: 0;
  font-family: Ventana;
`

const Image = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 128px;
`

const Button = styled.button`
  font-family: var(--main-font);
  text-align: center;
  border-radius: 19px;
  background-color: black;
  margin: 8px;
  padding: 5px;
  width: 160px;
  color: white;
  box-shadow: inset 0 0 0 1px #fff, 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: inset 0 0 0 1px #fff, 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Text = styled.p`
  padding: 5px;
  text-align: center;
  margin: 0 auto 10px auto;
  font-family: var(--main-font);
`

export default AgeGate
