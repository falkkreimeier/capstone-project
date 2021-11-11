import styled from 'styled-components/macro'

function FooterDesktop() {
  return (
    <Wrapper>
      <Text>Impressum</Text>
      <Text>AGB</Text>
      <Text>Datenschutz</Text>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-area: footerDesktop;
  display: none;
  @media screen and (min-width: 1000px) {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 1060px;
    background-color: white;
    color: black;
    height: 43px;
  }
`

const Text = styled.p`
  font-family: var(--main-font);
`

export default FooterDesktop
