import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <Wrapper>
      <Container to="/">
        <Product src="./img/painted-bottle.jpg" alt="Products" />
      </Container>
      <Container to="/motive">
        <Motiv src="./img/Logo.jpg" alt="Motive" />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: grid;
  grid-template-areas: 'product campaign cocktails';
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 19px;
  background-color: white;
  width: 22rem;
  height: 5rem;
`
const Container = styled(Link)``

const Product = styled.img`
  margin-left: 15px;
  grid-area: product;
  height: 4rem;
`

const Motiv = styled.img`
  margin-left: 15px;
  grid-area: campaign;
  height: 4rem;
`

export default Footer
