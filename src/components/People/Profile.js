import Kritzelkopf from '../People/img/Profil.JPG'
import styled from 'styled-components/macro'

function Profile() {
  return (
    <Wrapper>
      <Headline>Kritzelkopf</Headline>
      <StyledProfileImage src={Kritzelkopf} alt="Profilbild" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: profile;
  margin-bottom: 5px;
  width: var(--main-width);
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (min-width: 1000px) {
    margin-bottom: 0;
  }
`

export const Headline = styled.h2`
  font-family: var(--main-Headline);
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 0;
  margin: 10px 0px 5px 0px;
  text-decoration: none;
`

const StyledProfileImage = styled.img`
  position: sticky;
  height: 320px;
  padding: 0px;
`

export default Profile
