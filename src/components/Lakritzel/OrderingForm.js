import styled, { css } from 'styled-components'

function OrderingForm({ onAddOrder }) {
  return (
    <Wrapper>
      <Headline>Rette mich, wer kann!</Headline>
      <Form onSubmit={event => handleOnClickButton(event)}>
        <InputContainer>
          <Label>
            <HiddenLabelText>Vorname:</HiddenLabelText>
            <Vorname
              type="text"
              name="firstName"
              placeholder="Vorname"
              maxlength="20"
              required
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Nachname:</HiddenLabelText>
            <Nachnahme
              type="text"
              placeholder="Nachname"
              name="name"
              maxlength="20"
              required
            />
          </Label>
        </InputContainer>

        <InputContainer>
          <Label>
            <HiddenLabelText>Straße:</HiddenLabelText>
            <Straße
              maxlength="20"
              type="text"
              placeholder="Straße"
              name="street"
              required
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Postleitzahl:</HiddenLabelText>
            <Postleitzahl
              maxlength="20"
              type="number"
              placeholder="Postleitzahl"
              name="zipCode"
              required
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Stadt:</HiddenLabelText>
            <Stadt maxlength="20" type="text" placeholder="Stadt" name="city" />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>eMail:</HiddenLabelText>
            <Mail
              maxlength="20"
              type="email"
              placeholder="eMail Adresse"
              name="email"
              required
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Anzahl:</HiddenLabelText>
            <Amount
              maxlength="20"
              type="number"
              placeholder="0"
              name="quantity"
              required
            />
          </Label>
        </InputContainer>
        <MessageContainer>
          <Label>
            <HiddenLabelText>Nachricht:</HiddenLabelText>
            <Message
              type="text"
              cols="10"
              rows="8"
              placeholder="Nachricht"
              name="message"
            />
          </Label>
        </MessageContainer>
        <ButtonContainer>
          <ButtonOrder>Hol mich hier raus!</ButtonOrder>
        </ButtonContainer>
      </Form>
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
  height: 33rem;
`

const Form = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    'headline'
    'vorname'
    'nachname'
    'straße'
    'postleitzahl'
    'stadt'
    'email'
    'menge'
    'message'
    'buttonOrder';
`

const Label = styled.label``

const iconStyle = css`
  border: none;
  text-align: center;
  width: 155px;
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

const Nachnahme = styled.input`
  grid-area: nachname;
  ${iconStyle}
`

const Vorname = styled.input`
  grid-area: vorname;
  ${iconStyle}
`

const Straße = styled.input`
  grid-area: straße;
  ${iconStyle}
`

const Postleitzahl = styled.input`
  grid-area: postleitzahl;
  ${iconStyle}
`

const Stadt = styled.input`
  grid-area: stadt;
  ${iconStyle}
`

const Mail = styled.input`
  grid-area: mail;
  ${iconStyle}
`

const Amount = styled.input`
  grid-area: menge;
  ${iconStyle}
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

const Message = styled.input`
  grid-area: message;
  ${iconStyle}
  height: 60px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const ButtonOrder = styled.button`
  grid-area: buttonOrder;
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

export default OrderingForm
