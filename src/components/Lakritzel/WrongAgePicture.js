import styled from 'styled-components/macro'
import shorty from './Assets/shorty-nohl.jpg'

function WrongAgePicture() {
  return (
    <Wrapper>
      <CardContainer>
        <Headline>Oh, nein!</Headline>
        <SublineHeadline> Du bist noch zu klein.</SublineHeadline>
        <Image src={shorty} alt="" />
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 50;
  animation-duration: 1s;
  animation-name: fallDown;
  &.active {
    @keyframes fallDown {
      from {
        transform: translatey(800px);
      }

      to {
        transform: translateY(0);
      }
    }
  }
`
const CardContainer = styled.div`
  box-shadow: inset 0px 0px 30px 0px black;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  align-items: center;
  margin: 0 auto;
  width: 320px;
  height: 480px;
  background-color: white;
`
const Image = styled.img`
  height: 240px;
`

const Headline = styled.h2`
  margin-bottom: -5px;
  font-family: Ventana;
  font-size: 5rem;
  z-index: 5;
`

const SublineHeadline = styled.h2`
  margin-top: -5px;
  font-family: Ventana;
  font-size: 1.6rem;
  z-index: 5;
`

export default WrongAgePicture
