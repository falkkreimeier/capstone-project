import styled from 'styled-components/macro'
import linkedInimg from '../People/img/linkedin.svg'

function LinkedIn() {
  return (
    <Wrapper href="https://www.linkedin.com/in/falk-kreimeier-95b7ba221/">
      <Img src={linkedInimg} alt="LinkedIn Seite" />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  grid-area: linkedIn;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: auto;
  padding: 10px;
  transform: translateY(0px);
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
  @media only screen and (min-width: 1000px) {
    min-width: var(--soMe-width);
  }
`

const Img = styled.img`
  position: sticky;
  height: 30.4px;
`

export default LinkedIn
