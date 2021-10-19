import styled from "styled-components";

function Facts() {
  return (
    <Wrapper>
      <Headline>Facts:</Headline>
      <Ol>
        <List>40 Jahre jung</List>
        <List>1,93m klein</List>
        <List>Hoffnungsloser Optimist</List>
        <List>Philantrop</List>
        <List>
          Voll auf Spur, aber immer auch ein kleines bisschen daneben.
        </List>
        <br />
      </Ol>
      <Headline>Zitate:</Headline>
      <Ol>
        <List>"Isst du das noch?!"</List>
        <List>"Wer hat das Fettnäpfchen hier hingestellt?!"</List>
      </Ol>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: facts;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`;

const Headline = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  margin: 2px 0px 2px 0px;
  text-decoration: none;
  color: #58555a;
`;

const List = styled.li`
  text-align: left;
  font-family: "Inter", sans-serif;
`;

const Ol = styled.ol`
  margin: 0 0 10px 0;
`;

export default Facts;
