import { render, screen } from '@testing-library/react'
// import { MemoryRouter as Router } from 'react-router-dom'
import ProductCard from './ProductCard'

describe('it shows ProductCard', () => {
  const price = '18,-'

  it('renders', () => {
    render(<ProductCard />)

    const Image = screen.getByRole('img')
    expect(Image).toBeInTheDocument()
  })

  it('displays the Price of the Product', () => {
    render(<ProductCard price={price} />)

    const Price = screen.getByText('18,-')
    expect(Price).toBeInTheDocument()
  })
})
