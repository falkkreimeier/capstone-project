import styled from 'styled-components'
import logo from './Assets/Logo_Claim_Lakritzel.jpg'

function Header() {
  return (
    <Wrapper>
      <Image src={logo} alt="Lakritzel App" />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 19px;
  background-color: white;
  width: var(--main-width);
`

const Image = styled.img`
  margin: 0 auto;
  height: 5rem;
`

export default Header
