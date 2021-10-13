import styled from 'styled-components'

function OrderingForm() {
  return (
    <Wrapper>
      <Headline>Rette mich, wer kann!</Headline>
      <Form>
        <InputContainer>
          <Label>
            <HiddenLabelText>Vorname:</HiddenLabelText>
            <Vorname
              type="text"
              placeholder="Vorname"
              name="nachname"
              maxlength="20"
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
              name="straße"
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Postleitzahl:</HiddenLabelText>
            <Postleitzahl
              maxlength="20"
              type="text"
              placeholder="Postleitzahl"
              name="postleitzahl"
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Stadt:</HiddenLabelText>
            <Stadt
              maxlength="20"
              type="text"
              placeholder="Stadt"
              name="stadt"
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>eMail:</HiddenLabelText>
            <Mail
              maxlength="20"
              type="text"
              placeholder="eMail Adresse"
              name="email"
            />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label>
            <HiddenLabelText>Anzahl:</HiddenLabelText>
            <Amount maxlength="20" type="number" placeholder="0" name="menge" />
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
              name="nachricht"
            />
          </Label>
        </MessageContainer>
        <ButtonContainer>
          <Button>Hol mich hier raus!</Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  width: var(--main-width);
  border: 1px solid white;
  border-radius: 15px;
  padding: 0px;
  background-color: white;
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
    'button';
`

const Label = styled.label``

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
  grid-area: headline;
  text-align: center;
  font-family: Ventana;
`

const InputContainer = styled.div`
  margin: 10px;
  width: 170px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
`

const Nachnahme = styled.input`
  grid-area: nachname;
  border: none;
  text-align: center;
  width: 160px;
`

const Vorname = styled.input`
  grid-area: vorname;
  border: none;
  text-align: center;
  width: 160px;
`

const Straße = styled.input`
  grid-area: straße;
  border: none;
  text-align: center;
  width: 160px;
`

const Postleitzahl = styled.input`
  grid-area: postleitzahl;
  border: none;
  text-align: center;
  width: 160px;
`

const Stadt = styled.input`
  grid-area: stadt;
  border: none;
  text-align: center;
  width: 160px;
`

const Mail = styled.input`
  grid-area: mail;
  border: none;
  text-align: center;
  width: 160px;
`

const Amount = styled.input`
  grid-area: menge;
  border: none;
  text-align: center;
  width: 160px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: message;
  margin: 10px;
  width: 170px;
  height: 80px;
  border-radius: 19px;
  border: 2px solid black;
  text-align: center;
`

const Message = styled.input`
  border: none;
  text-align: center;
  width: 160px;
  height: 60px;
`

const ButtonContainer = styled.div`
  grid-area: button;
  display: flex;
`

const Button = styled.button`
  position: relative;
  top: 0px;
  left: 40px;
  margin: 0 auto;
  margin: 10px;
  padding: 5px;
  border: none;
  background-color: black;
  color: white;
  width: 6rem;
  height: 6rem;
  font-size: 1rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
  }
`

export default OrderingForm
