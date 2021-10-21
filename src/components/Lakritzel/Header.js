import styled from 'styled-components'
import Logo from './Assets/Logo-lettering.jpg'

function Header() {
  return (
    <Wrapper>
      <Image src={Logo} alt="Lakritzel App" />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 19px;
  background-color: white;
  width: var(--main-width);
  height: 100px;
`

const Image = styled.img`
  margin: 0 auto;
  height: 5.5rem;
`

export default Header
