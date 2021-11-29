import styled from 'styled-components/macro'
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

const Wrapper = styled.div`
  grid-area: techstack;
  background-color: white;
  color: black;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media (max-width: 1000px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
    font-size: 14px;
  }
`

const Headline = styled.h2`
  margin-top: 20px;
  font-family: var(--main-Headline);
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`

const List = styled.ol`
  @media (max-width: 1000px) {
    padding: 5px 0px 0px 35px;
    margin: 10px 0 20px 100px;
  }
`

const ListItem = styled.li`
  text-align: left;

  font-family: var(--main-font);
`

export default TechStack
