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
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:hover {
    box-shadow: 0 14px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`
const Img = styled.img`
  position: sticky;
  height: 1.9rem;
`

export default linkedIn
