import styled from 'styled-components'
import { Headline } from './Profile'

function Interests() {
  return (
    <Wrapper>
      <Headline>Interessen</Headline>
      <Ol>
        <List>Programmieren</List>
        <List>Bücher (Fantasy)</List>
        <List>Gaming</List>
        <List>Neue Dinge erfinden, z.B. Lakritzel</List>
        <List>Hanteln schubsen</List>
        <List>Schreiben/Texten</List>
      </Ol>
      <Headline>Fähigkeiten</Headline>
      <Ol>
        <List>Semantisches HTML</List>
        <List>Java Script</List>
        <List>CSS</List>
        <List>React</List>
        <List>Werbetexter</List>
        <List>Kaufmann mit Führungserfahrung </List>
      </Ol>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const List = styled.li`
  text-align: left;
  font-family: 'Inter', sans-serif;
`

export const Ol = styled.ol`
  padding: 5px 0px 0px 35px;
  margin: 0;
`

export default Interests
