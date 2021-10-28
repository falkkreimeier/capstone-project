import styled from 'styled-components/macro'
import Profile from './Profile'
import Welcome from './Welcome'
import Interests from './Interests'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Xing from './Xing'
import Github from './Github'
import LinkedIn from './linkedIn'
import BlogText from './BlogText'

function Kritzelkopf() {
  return (
    <Container>
      <Profile />
      <Welcome />
      <Interests />
      <Facts />
      <Portfolio />
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
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'PT Serif', serif;
  width: var(--main-width);
  grid-gap: 5px;
`

const SoMeContainer = styled.div`
  display: flex;
  width: var(--main-width);
  gap: 5px;
  object-fit: contain;
`

export default Kritzelkopf
