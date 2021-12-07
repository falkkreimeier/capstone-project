import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'

function PayPal() {
  const paypal = useRef()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Der übergeschnapsteste Lakritzlikör Deutschlands',
                amount: {
                  currency_code: 'EUR',
                  value: 18.0,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
        },
        onError: err => {
          console.log(err)
        },
      })
      .render(paypal.current)
  }, [])
  return (
    <Wrapper>
      <div ref={paypal}></div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default PayPal
