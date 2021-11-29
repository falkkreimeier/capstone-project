import styled from 'styled-components/macro'
import Phone from '../People/Assets/phone_white_24dp.svg'
import Mail from '../People/Assets/email_white_24dp.svg'

function Footer() {
  return (
    <Wrapper>
      <Text>Falk Kreimeier </Text>
      <Icons src={Phone} alt="phonenumer" />
      <Text>0152-05639742 </Text>

      <Icons src={Mail} alt="E-Mail Adresse" />
      <Text>f.kreimeier@gmx.net</Text>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  grid-area: footer;
  background: white;
  color: black;
  border-radius: 5px;
  padding: var(--main-padding);
  @media (max-width: 1000px) {
    max-width: 410;
  }
`
const Text = styled.p`
  font-family: var(--main-font);
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`
const Icons = styled.img`
  height: 1.2rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  @media only screen and (max-width: 800px) {
    height: 0.8rem;
  }
`

export default Footer
