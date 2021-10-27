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
  margin-top: 5px;
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

export default Github
