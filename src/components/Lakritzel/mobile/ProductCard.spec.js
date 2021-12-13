import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('render ProductCard', () => {
  const price = '18,-'

  it('shows ProductCard Images', () => {
    render(<ProductCard />)

    const Images = screen.getAllByRole('img', { hidden: true })
    expect(Images).toHaveLength(2)
  })

  it('has the correct alt text', () => {
    const altText = ''

    render(<ProductCard image="https://localhost:3000/" />)

    const text = screen.getByAltText(altText, { hidden: true })
    expect(text).toHaveAttribute('alt', altText)
  })

  it('has the correct alt text2', () => {
    const altText2 = 'Lakritzel'

    render(<ProductCard image="https://localhost:3000/" />)

    const text2 = screen.getByAltText(altText2, { hidden: true })
    expect(text2).toHaveAttribute('alt', altText2)
  })

  it('displays the Price of the Product', () => {
    render(<ProductCard price={price} />)

    const Price = screen.getByText('18,-', { hidden: true })
    expect(Price).toBeInTheDocument()
  })

  it('renders button', () => {
    render(<ProductCard />)

    const buttons = screen.getByRole('button', { hidden: true })
    expect(buttons).toBeInTheDocument()
  })
})
