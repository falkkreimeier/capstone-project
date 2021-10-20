import styled from 'styled-components/macro'

function Cocktails({ name, mixed, ingredients, preparation }) {
  return (
    <Wrapper>
      <Headline>
        {mixed} {name}
      </Headline>
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
  margin-bottom: 5px;
  height: auto;
`

const Headline = styled.h2`
  margin: 0 auto;
  font-family: 'Ventana';
  margin-bottom: 10px;
`

const InnerHeadline = styled.h4`
  font-family: var(--main-headline);
  margin: 0;
  margin-bottom: 5px;
`

const Ingredience = styled.div`
  font-family: var(--main-font);
  margin-bottom: 10px;
`

const MixIt = styled.div`
  font-family: var(--main-font);
  margin-bottom: 5px;
`

export default Cocktails
