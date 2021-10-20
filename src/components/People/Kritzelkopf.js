import styled from 'styled-components'
import Profile from './Profile'
import Welcome from './Welcome'
import Interests from './Interests'
import Skills from './Skills'
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
      <Skills />
      <Facts />
      <Portfolio />
      <Xing />
      <Github />
      <LinkedIn />
      <BlogText />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'head'
    'profileArea'
    'welcome'
    'interests'
    'skills'
    'portfolio'
    'facts'
    'xing'
    'github'
    'linkedIn'
    'blogText'
    'footer';
  text-align: center;
  font-family: 'PT Serif', serif;
  width: var(--main-width);
  grid-gap: 5px;
`

export default Kritzelkopf
