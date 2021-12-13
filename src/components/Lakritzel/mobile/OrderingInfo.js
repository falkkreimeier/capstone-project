import styled from 'styled-components'
import crazy from '../Assets/der-ballert-noHeadline.png'

function OrderingInfo({ orderingInfo, count, onShopButtonClick }) {
  return (
    <Wrapper orderingInfo={(orderingInfo, count)}>
      <Headline>Endlich frei!</Headline>
      <Image src={crazy} alt="" />
      <Text>
        Überkritzel nur noch schnell die {count * 18 + 5} € per PayPal oder
        Direktüberweisung. Alle Infos findest du in der Bestätigungsmail. Und
        dann füllen wir alle ab Muhahahahah ...
      </Text>
      <Button onClick={onShopButtonClick}>Alles klar!</Button>
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
`

const Headline = styled.h2`
  margin-top: 30px;
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

const Button = styled.button`
  margin-top: -25px;
  font-family: Ventana;
  padding: 10px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: 19px;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
  @media (min-width: 1000px) {
    margin: 20px auto;
  }
`

export default OrderingInfo
