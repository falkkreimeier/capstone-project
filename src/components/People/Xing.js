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

export default Xing
