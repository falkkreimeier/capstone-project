import styled from 'styled-components'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function TechStack() {
  return (
    <Wrapper>
      <Headline>TechStack</Headline>
      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>React</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>ExpressJS</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Git & GitHub</ListItem>
        <ListItem>Figma</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 352px;
  background-image: url(${klecks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21rem;
  background-color: white;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

const Headline = styled.h2`
  margin-top: 20px;
  font-family: var(--main-Headline);
`

const List = styled.ol`
  padding: 5px 0px 0px 35px;
  margin: -5px 0 20px 100px;
`

const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
`

export default TechStack
