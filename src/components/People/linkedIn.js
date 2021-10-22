import styled from 'styled-components'
import linkedInimg from '../People/img/linkedin.svg'

function linkedIn() {
  return (
    <Wrapper href="https://www.linkedin.com/in/falk-kreimeier-95b7ba221/">
      <Img src={linkedInimg} alt="LinkedIn Seite" />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: auto;
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`
const Img = styled.img`
  position: sticky;
  height: 1.9rem;
`

export default linkedIn
