import styled from "styled-components";
import { List, Ol } from "./Interests";
import { Headline } from "./Profile";

function Skills() {
  return (
    <Wrapper>
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
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: skills;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`;
export default Skills;
