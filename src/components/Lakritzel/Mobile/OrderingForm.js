import styled from 'styled-components/macro'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaArrowCircleLeft as ArrowLeft } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import OrderingInfo from './OrderingInfo'

function OrderingForm({ onAddOrder, onButtonClick }) {
  const [orderingInfo, setOrderingInfo] = useState(true)
  function handleOrderingButtonClick() {
    setOrderingInfo(!orderingInfo)
  }
  function sendEmail(e, form) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_j4pyv19',
        'template_22yilsn',
        form,
        'user_Vw3AP2J9KSibkIg9aSk6p'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  if (!orderingInfo) {
    return (
      <OrderingInfo
        orderingInfo={orderingInfo}
        onHandleOrderingButtonClick={handleOrderingButtonClick}
      />
    )
  }

  return (
    <Wrapper>
      <Headline>Rette mich, wer kann!</Headline>
      <Form onSubmit={event => handleOnClickButton(event)}>
        <InputContainer>
          <label>
            <HiddenLabelText>Vorname:</HiddenLabelText>
            <Input
              type="text"
              name="firstName"
              placeholder="Vorname"
              maxlength="20"
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            <HiddenLabelText>Nachname:</HiddenLabelText>
            <Input
              type="text"
              placeholder="Nachname"
              name="name"
              maxlength="20"
              required
            />
          </label>
        </InputContainer>

        <InputContainer>
          <label>
            <HiddenLabelText>Straße:</HiddenLabelText>
            <Input
              maxlength="20"
              type="text"
              placeholder="Straße"
              name="street"
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            <HiddenLabelText>Postleitzahl:</HiddenLabelText>
            <Input
              maxlength="20"
              type="number"
              placeholder="Postleitzahl"
              name="zipCode"
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            <HiddenLabelText>Stadt:</HiddenLabelText>
            <Input maxlength="20" type="text" placeholder="Stadt" name="city" />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            <HiddenLabelText>eMail:</HiddenLabelText>
            <Input
              maxlength="20"
              type="email"
              placeholder="eMail Adresse"
              name="email"
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            <HiddenLabelText>Anzahl:</HiddenLabelText>
            <Input
              maxlength="20"
              type="number"
              placeholder="Menge"
              name="quantity"
              required
            />
          </label>
        </InputContainer>
        <MessageContainer>
          <label>
            <HiddenLabelText>Nachricht:</HiddenLabelText>
            <Input
              type="text"
              cols="10"
              rows="8"
              placeholder="Nachricht"
              name="message"
            />
          </label>
        </MessageContainer>
        <ButtonOrder onClick={onAddOrder} activeClassName="active">
          Hol mich hier raus!
        </ButtonOrder>
      </Form>
      <IconPosition>
        <IconContext.Provider
          value={{
            color: 'black',
            size: '30px',
          }}
        >
          <ArrowLeft onClick={onButtonClick} />
        </IconContext.Provider>
      </IconPosition>
    </Wrapper>
  )

  function handleOnClickButton(event) {
    event.preventDefault()
    const form = event.target
    console.log(form)
    const {
      firstName,
      name,
      street,
      zipCode,
      city,
      email,
      quantity,
      message,
    } = form.elements

    onAddOrder({
      firstName: firstName.value,
      name: name.value,
      street: street.value,
      zipCode: zipCode.value,
      city: city.value,
      email: email.value,
      quantity: quantity.value,
      message: message.value,
    })
    sendEmail(event, form)
    handleOrderingButtonClick(event)
    form.reset()
  }
}

const Wrapper = styled.section`
  margin: 0 auto;
  width: var(--main-width);
  border: 1px solid white;
  border-radius: var(--border-radius);
  padding: 0px;
  background-color: white;
  height: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Add HidenLabelText to hide the Label Text, to make it usable for screenreader
const HiddenLabelText = styled.span`
  display: block;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`

const Headline = styled.h2`
  padding-top: 10px;
  grid-area: headline;
  text-align: center;
  font-family: Ventana;
`

const InputContainer = styled.div`
  margin: 7px;
  width: 180px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
`

const Input = styled.input`
  border: none;
  text-align: center;
  margin-top: 3px;
  width: 155px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  margin-bottom: 20px;
  width: 180px;
  height: 50px;
  border-radius: 19px;
  border: 2px solid black;
  text-align: center;
`

const ButtonOrder = styled.button`
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
const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 30px 0px 0px;
`

export default OrderingForm