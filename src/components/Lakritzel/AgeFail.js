import styled from 'styled-components'
import Shorty from './Assets/shorty-nohl.jpg'

function AgeFail() {
  return (
    <Wrapper>
      <Headline>Oh, nein!</Headline>
      <Subline> Du bist noch zu klein.</Subline>
      <Image src={Shorty} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 100%;
  z-index: 100;
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

const Subline = styled.h2`
  margin-top: -5px;
  font-family: Ventana;
  font-size: 2rem;
  z-index: 5;
`

const Text = styled.p`
  font-family: var(--main-fond);
`

export default AgeFail
