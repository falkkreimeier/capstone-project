import styled from 'styled-components'
import Xingimg from '../People/img/xing.svg'

function Xing() {
  return (
    <Wrapper href="https://www.xing.com/profile/falk_kreimeier">
      <Img src={Xingimg} alt="Mein Xing Profil" />
    </Wrapper>
  )
}

export const Img = styled.img`
  position: sticky;
  height: 40px;
`

const Wrapper = styled.a`
  grid-area: xing;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  padding: 10px;
  transform: translateY(0px);
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
  @media (min-width: 1000px) {
    min-width: var(--soMe-width);
  }
`

export default Xing
