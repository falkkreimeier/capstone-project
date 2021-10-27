import styled from 'styled-components/macro'
import shorty from './Assets/shorty-nohl.jpg'
import AgeGate from './AgeGate'

function WrongAgePicture() {
  return (
    <>
      {/* <Container>
        <AgeGate />
      </Container> */}

      <Wrapper>
        <CardContainer>
          <Headline>Oh, nein!</Headline>
          <SublineHeadline> Du bist noch zu klein.</SublineHeadline>
          <Image src={shorty} alt="" />
        </CardContainer>
      </Wrapper>
    </>
  )
}

const Container = styled.section`
  z-index: -1;
`

const Wrapper = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  /* z-index: 50; */
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
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  align-items: center;
  margin: 0 auto;
  width: 20rem;
  height: 30rem;
  background-color: white;
`
const Image = styled.img`
  height: 15rem;
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
