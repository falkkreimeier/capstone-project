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
  height: 3rem;
`

const Wrapper = styled.a`
  grid-area: xing;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`

export default Xing
