import styled from 'styled-components/macro'

function MixedDrinks({ name, mixed, ingredience, preparation }) {
  return (
    <Wrapper>
      <Headline>
        {mixed} - {name}
      </Headline>
      <Ingredience>{ingredience}</Ingredience>
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
`

const Headline = styled.h2`
  margin: 0 auto;
  font: 'Ventana';
  margin-bottom: 5px;
`

const Ingredience = styled.div`
  margin-bottom: 5px;
`

const MixIt = styled.div`
  margin-bottom: 5px;
`

export default MixedDrinks
