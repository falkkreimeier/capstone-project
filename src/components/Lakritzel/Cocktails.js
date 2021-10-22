import styled from 'styled-components/macro'

function Cocktails({ name, ingredients, preparation }) {
  return (
    <Wrapper>
      <Headline>{name}</Headline>
      <InnerHeadline>Zutaten:</InnerHeadline>
      <Ingredience>{ingredients}</Ingredience>
      <InnerHeadline>Zubereitung:</InnerHeadline>
      <MixIt>{preparation}</MixIt>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: var(--main-width);
  min-height: 20rem;
  gap: 5px;
  :nth-child(even) {
    background-color: black;
    border: 20px solid white;
    color: white;
  }
  h4:nth-child(3n, 4n) {
    color: white;
  }
`

const Headline = styled.h2`
  font-family: 'Ventana';
  margin-bottom: 10px;
  margin: 20px auto;
`

const InnerHeadline = styled.h4`
  font-family: var(--main-headline);
  color: #58555a;
  margin-bottom: 5px;
  margin: 10px 0 0 30px;
`

const Ingredience = styled.div`
  font-family: var(--main-font);
  margin-bottom: 10px;
  margin: 0 0 0 30px;
`

const MixIt = styled.div`
  font-family: var(--main-font);
  margin-bottom: 5px;
  margin: 0 0 0 30px;
`
export default Cocktails
