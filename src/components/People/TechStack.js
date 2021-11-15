import styled from 'styled-components'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function TechStack() {
  return (
    <Wrapper>
      <Headline>TechStack</Headline>
      <List>
        <ListItem>HTML5</ListItem>
        <ListItem>CSS3</ListItem>
        <ListItem>React</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>ExpressJS</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Git & GitHub</ListItem>
        <ListItem>React-Testing-Library</ListItem>
        <ListItem>Storybook</ListItem>
        <ListItem>Vercel</ListItem>
        <ListItem>VS Code </ListItem>
        <ListItem>Mongoose</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: techstack;
  min-height: 352px;
  background-image: url(${klecks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21rem;
  background-color: white;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  margin-bottom: 5px;
  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`

const Headline = styled.h2`
  margin: 20px 0 0px 50px;
  font-family: var(--main-Headline);
`

const List = styled.ol`
  padding: 5px 0px 0px 35px;
  margin: -10px 0 20px 50px;
`

const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
`

export default TechStack
