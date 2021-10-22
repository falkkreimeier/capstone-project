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
  height: 2.5rem;
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

export default Xing
