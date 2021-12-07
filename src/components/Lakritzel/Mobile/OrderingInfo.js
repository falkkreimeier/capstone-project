import styled from 'styled-components'
import crazy from '../Assets/der-ballert-noHeadline.png'
import PayPal from '../mobile/PayPal'
import { useState } from 'react'

function OrderingInfo({ orderingInfo, count }) {
  const [purchase, setPurchase] = useState()
  return (
    <Wrapper orderingInfo={(orderingInfo, count)}>
      <Headline>Endlich frei!</Headline>
      <Image src={crazy} alt="" />
      <Text>
        Willkommen auf der dunklen Seite der Nacht. Kleine Bestellbestätigung
        hab ich dir auch schon geschickt. Zahle jetzt mit PayPal oder per
        Direktüberweisung + 5€ Versand (siehe Bestätigungs-Mail).
      </Text>

      {purchase ? (
        <PayPal />
      ) : (
        <PayPalButton
          onClick={() => {
            setPurchase(true)
          }}
        >
          Jetzt kaufen
        </PayPalButton>
      )}
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

const PayPalButton = styled.button``

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
