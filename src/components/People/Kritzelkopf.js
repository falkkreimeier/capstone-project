import styled from 'styled-components/macro'
import Profile from './Profile'
import Welcome from './Welcome'
import Interests from './Interests'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Xing from './Xing'
import Github from './Github'
import LinkedIn from './LinkedIn'
import BlogText from './BlogText'
import TechStack from './TechStack'

function Kritzelkopf() {
  return (
    <Container>
      <Profile />
      <Welcome />
      <Interests />
      <Facts />
      <Portfolio />
      <TechStack />
      <BlogText />
      <SoMeContainer>
        <Xing />
        <Github />
        <LinkedIn />
      </SoMeContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  font-family: 'PT Serif', serif;
  width: var(--main-width);
  @media only screen and (min-width: 1000px) {
    margin: 0;

    /* max-width: 1000px; */
    display: grid;
    grid-template-areas:
      'profile welcome welcome welcome'
      'profile interests interests portfolio'
      'facts xing github linkedIn'
      'facts techstack blog blog';
    grid-gap: 0.2rem;
    text-align: center;
  }
`

const SoMeContainer = styled.div`
  display: flex;
  width: var(--main-width);
  gap: 5px;
  object-fit: contain;
`

export default Kritzelkopf
