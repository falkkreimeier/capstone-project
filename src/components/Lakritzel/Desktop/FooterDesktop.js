import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function FooterDesktop() {
  return (
    <Wrapper>
      <LinkTo exact to="/impressum">
        Impressum
      </LinkTo>
      <LinkTo exact to="/agb">
        AGB
      </LinkTo>
      <LinkTo to="/datenschutz">Datenschutz</LinkTo>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-area: footerDesktop;
  display: none;
  @media screen and (min-width: 1000px) {
    margin: 5px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 1060px;
    background-color: white;
    color: black;
    height: 83px;
    border-radius: var(--border-radius);
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  font-family: var(--main-font);
`

export default FooterDesktop
