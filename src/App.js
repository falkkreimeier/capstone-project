import ProductCard from './ProductCard'
import Header from './Header'

function App({ data }) {
  return (
    <div>
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
    </div>
  )
}

export default App
