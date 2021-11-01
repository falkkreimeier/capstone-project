import styled from 'styled-components/macro'
import Githubimg from '../People/img/github.svg.png'

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
  background: white;
  border-radius: var(--border-radius);
  min-width: auto;
  padding: 10px;
  transform: translateY(px);
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
`

export default Github
