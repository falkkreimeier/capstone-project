import zukunft from '../Assets/Zukunft-noLogo.jpg'
import styled from 'styled-components/macro'

function ProfileDesktop() {
  return (
    <Wrapper>
      <StyledProfileImage src={zukunft} alt="Profilbild" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: kritzelkopf;
  margin: 0 auto;
  width: var(--main-width);
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  display: none;
  @media screen and (min-width: 1000px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ;
`

const StyledProfileImage = styled.img`
  position: sticky;
  height: 320px;
  padding: 0px;
  @media screen and (min-width: 1000px) {
    position: static;
    height: 280px;
  }
`
export default ProfileDesktop
