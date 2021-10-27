import styled from 'styled-components'
import logo from './Assets/Logo-lettering.jpg'
import crazy from './Assets/Übergeschnapst.jpg'

function AgeGate({ onAgeButtonClick }) {
  function over18Handler() {
    onAgeButtonClick(true)
  }
  function under18Handler() {
    onAgeButtonClick(false)
  }
  return (
    <Wrapper>
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
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Text = styled.p`
  text-align: center;
  margin: 0 auto 10px auto;
  font-family: var(--main-font);
`

export default AgeGate
