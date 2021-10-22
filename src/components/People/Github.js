import styled from 'styled-components'
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
  height: 4rem;
`

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

export default Github
