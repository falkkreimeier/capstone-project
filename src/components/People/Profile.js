import Kritzelkopf from '../People/img/Profil.JPG'
import styled from 'styled-components'

function Profile() {
  return (
    <Wrapper>
      <Headline>Kritzelkopf</Headline>
      <StyledProfileImage src={Kritzelkopf} alt="Profilbild" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: var(--main-width);
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const Headline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin: 10px 0px 5px 0px;
  text-decoration: none;
  color: #58555a;
`

const StyledProfileImage = styled.img`
  position: sticky;
  height: 20rem;
  padding: 0px;
`

export default Profile
