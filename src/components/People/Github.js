import styled from 'styled-components/macro'
import Githubimg from '../People/Assets/github.svg.png'

function Github() {
  return (
    <Wrapper href="https://github.com/falkkreimeier">
      <Img src={Githubimg} alt="Mein github Profil" />
    </Wrapper>
  )
}

export const Img = styled.img`
  position: sticky;
  height: 64px;
`

const Wrapper = styled.a`
  grid-area: github;
  background: white;
  border-radius: var(--border-radius);
  padding: 5px;

  transform: translateY(0px);
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
`

export default Github
