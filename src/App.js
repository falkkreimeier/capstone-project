import ProductCard from './components/ProductCard'
import Header from './components/Header'
import styled from 'styled-components/macro'
import Shop from './components/Shop'

function App({ data }) {
  return (
    <Wrapper>
      <Header />
      {data.map(product => (
        <ProductCard
          description={product.description}
          claim={product.claim}
          price={product.price}
          ingredients={product.ingredients}
          alcohol={product.alcohol}
          mount={product.mount}
          image={product.image}
          logo={product.logo}
          key={product.name}
        />
      ))}
      <Shop />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export default App
