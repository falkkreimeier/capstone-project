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
        <ListItem>Philantrop</ListItem>
        <ListItem>
          Voll auf Spur, aber immer auch ein kleines bisschen daneben.
        </ListItem>
      </List>
      <Headline>Zitate:</Headline>
      <List>
        <ListItem>"Isst du das noch?!"</ListItem>
        <ListItem>"Wer hat das Fettnäpfchen hier hingestellt?!"</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: facts;
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
    padding-top: 60px;
  }
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
  margin: 30px auto 0 40px;
  font-size: 1.3rem;
`

const List = styled.ol`
  margin: -5px auto;
`

const ListItem = styled.li`
  text-align: left;
  font-family: var(--main-font);
  margin-left: 20px;
`

export default Facts
