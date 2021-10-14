import ProductCard from './ProductCard'
import Header from './Header'
import OrderingForm from './OrderingForm'
import styled from 'styled-components/macro'
import StoryToShop from './StoryToShop'
import Shop from './Shop'

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
      <Shop OrderingForm={OrderingForm} StoryToShop={StoryToShop} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export default App
