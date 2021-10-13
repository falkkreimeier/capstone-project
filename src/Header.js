import styled from 'styled-components'

function Header(props) {
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
  margin-bottom: 10px;
  border-radius: 19px;
  background-color: white;
  width: 22rem;
`

const Image = styled.img`
  margin: 0 auto;
  height: 7rem;
`

export default Header
