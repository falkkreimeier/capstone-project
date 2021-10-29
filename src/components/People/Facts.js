import styled from 'styled-components/macro'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function Facts() {
  return (
    <Wrapper>
      <Headline>Fakten:</Headline>
      <Ol>
        <List>41 Jahre jung</List>
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
  )
}

const Wrapper = styled.div`
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
  font-family: var(--main-Headline);
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
`

const List = styled.li`
  text-align: left;
  font-family: var(--main-font);
`

const Ol = styled.ol`
  margin: 0 0 -20px 0;
`

export default Facts
