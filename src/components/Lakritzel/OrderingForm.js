import styled from 'styled-components'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function OrderingForm({ onAddOrder, flipToShop, onButtonClick }) {
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
              placeholder="0"
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
        <ButtonOrder>Hol mich hier raus!</ButtonOrder>
      </Form>
      <IconPosition>
        <IconContext.Provider
          value={{
            color: 'black',
            size: '30px',
          }}
        >
          <FaArrowCircleLeft flipToShop={flipToShop} onClick={onButtonClick} />
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
  height: 34rem;
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
  width: 170px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
`

const Input = styled.input`
  border: none;
  text-align: center;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  margin-bottom: 20px;
  width: 170px;
  height: 80px;
  border-radius: 19px;
  border: 2px solid black;
  text-align: center;
`

const ButtonOrder = styled.button`
  margin: 0 auto;
  margin-bottom: 15px;
  border: none;
  background-color: black;
  color: white;
  width: 11rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: var(--border-radius);
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 15px 15px 15px 8px grey;
  }
`
const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`

export default OrderingForm
