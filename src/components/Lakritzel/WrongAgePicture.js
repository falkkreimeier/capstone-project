import styled from 'styled-components/macro'
import shorty from './Assets/shorty-nohl.jpg'

function WrongAgePicture() {
  return (
    <Wrapper>
      <Headline>Oh, nein!</Headline>
      <SublineHeadline> Du bist noch zu klein.</SublineHeadline>
      <Image src={shorty} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const Image = styled.img`
  margin-top: -150px;
  height: 30rem;
`

const Headline = styled.h2`
  margin-bottom: -10px;
  font-family: Ventana;
  font-size: 6rem;
  z-index: 5;
`

const SublineHeadline = styled.h2`
  margin-top: -5px;
  font-family: Ventana;
  font-size: 2rem;
  z-index: 5;
`

export default WrongAgePicture
