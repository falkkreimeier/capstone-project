import ProductCard from './ProductCard'

function App({ data }) {
  return (
    <div>
      {data.map(product => (
        <ProductCard
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
