import ProductCard from './ProductCard'

export default function ProductList({ data }) {
  return data.product.map(product => (
    <ProductCard
      description={product.description}
      crazy={product.crazy}
      price={product.price}
      ingredients={product.ingredients}
      alcohol={product.alcohol}
      mount={product.mount}
      image={product.image}
      logo={product.logo}
      key={product.name}
    />
  ))
}
