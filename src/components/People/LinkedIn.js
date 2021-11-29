import styled from 'styled-components/macro'
import linkedInimg from '../People/Assets/linkedin.svg'

function LinkedIn() {
  return (
    <Wrapper href="https://www.linkedin.com/in/falk-kreimeier-95b7ba221/">
      <Img src={linkedInimg} alt="LinkedIn Seite" />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  grid-area: linkedin;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  padding: 15px;
  transform: translateY(px);
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
`

const Img = styled.img`
  position: sticky;
  height: 30.4px;
`

export default LinkedIn
