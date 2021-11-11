import styled from 'styled-components'
import crazy from '../Assets/der-ballert-noHeadline.png'

function OrderingInfo({ orderingInfo, onHandleOrderingButtonClick }) {
  return (
    <Wrapper orderingInfo={orderingInfo}>
      <Headline>Endlich frei!</Headline>
      <Image src={crazy} alt="" />
      <Text>
        Willkommen auf der dunklen Seite der Nacht. Kleine Bestellbestätigung
        hab ich dir auch schon geschickt.
      </Text>
      <Button onClick={onHandleOrderingButtonClick}>Alles klar!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  margin: 0 auto;
  height: 500px;
  background-color: white;
  animation-duration: 1s;
  animation-name: riseUp;
  &.active {
    @keyframes riseUp {
      from {
        transform: translatey(800px);
      }

      to {
        transform: translateY(0);
      }
    }
  }
`

const Button = styled.button`
  font-family: Ventana;
  margin: 0 auto;
  padding: 10px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Headline = styled.h2`
  margin-top: 20px;
  font-size: 3rem;
`

const Text = styled.p`
  text-align: center;
  font-family: var(--main-font);
  margin-top: -35px;
  padding: 20px;
`

const Image = styled.img`
  margin-top: -90px;
  height: 300px;
`

export default OrderingInfo
