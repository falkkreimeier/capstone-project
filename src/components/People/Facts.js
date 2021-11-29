import styled from 'styled-components/macro'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function Facts() {
  return (
    <Wrapper>
      <Headline>Fakten:</Headline>
      <List>
        <ListItem>41 Jahre jung</ListItem>
        <ListItem>1,93m klein</ListItem>
        <ListItem>Hoffnungsloser Optimist</ListItem>
        <ListItem>Philanthrop</ListItem>
        <ListItem>
          Voll auf Spur, aber immer auch ein kleines bisschen daneben.
        </ListItem>
      </List>
      <Headline>Zitat:</Headline>
      <List>
        <ListItem>"Isst du das noch?!"</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: facts;
  background-color: white;
  color: black;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media (max-width: 800px) {
    min-height: 352px;
    background-color: white;
    color: white;
    background-image: url(${klecks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 21rem;
  }
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
  margin-top: 30px auto;
  font-size: 1.3rem;
`

const List = styled.ol`
  margin: -10px 0 -10px 0px;
`

const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
  margin-left: 20px;
  @media (max-width: 800px) {
    margin-left: 50px;
  }
`

export default Facts
