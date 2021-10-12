import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
      <Image src="/img/Schriftzug.jpg" alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
