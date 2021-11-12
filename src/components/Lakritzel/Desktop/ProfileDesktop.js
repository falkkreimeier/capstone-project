import Kritzelkopf from '../../People/img/Profil.JPG'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function ProfileDesktop() {
  return (
    <Wrapper>
      <Headline>Kritzelkopf</Headline>
      <StyledProfileImage src={Kritzelkopf} alt="Profilbild" />
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
    height: 300px;
  } ;
`

export const Headline = styled.h2`
  font-family: ventana;
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
  @media screen and (min-width: 1000px) {
    position: static;
    height: 240px;
  }
`
export default ProfileDesktop
