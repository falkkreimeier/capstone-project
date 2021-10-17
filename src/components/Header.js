import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
      <Image src={'img/Logo-lettering.jpg'} alt="Lakritzel App" />
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
`

const Image = styled.img`
  margin: 0 auto;
  height: 7rem;
`

export default Header
