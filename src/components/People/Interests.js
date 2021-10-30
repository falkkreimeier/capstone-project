import styled from 'styled-components/macro'

function Interests() {
  return (
    <Wrapper>
      <Headline>Interessen</Headline>
      <List>
        <ListItem>Programmieren</ListItem>
        <ListItem>Bücher (Fantasy)</ListItem>
        <ListItem>Gaming</ListItem>
        <ListItem>Neue Dinge erfinden, z.B. Lakritzel</ListItem>
        <ListItem>Hanteln schubsen</ListItem>
        <ListItem>Schreiben/Texten</ListItem>
      </List>
      <Headline>Fähigkeiten</Headline>
      <List>
        <ListItem>Web Developer</ListItem>
        <ListItem>Werbetexten</ListItem>
        <ListItem>Recherche</ListItem>
        <ListItem>Ikea Schränke augbauen</ListItem>
        <ListItem>Grillen</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
`

export const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
`

export const List = styled.ol`
  padding: 5px 0px 0px 35px;
  margin: 0;
`

export default Interests
