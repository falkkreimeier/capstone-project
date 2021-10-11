import ProductCard from './ProductCard'

function App({ data }) {
  return (
    <div>
      {data.map(product => (
        <ProductCard
          product={product.name}
          price={product.price}
          description={product.description}
          alcohol={product.alcohol}
          mount={product.mount}
          image={product.image}
          key={product.name}
        />
      ))}
    </div>
  )
}

export default App
