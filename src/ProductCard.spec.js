import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('render ProductCard', () => {
  const price = '18,-'

  it('shows ProductCard Images', () => {
    render(<ProductCard />)

    const Images = screen.getAllByRole('img')
    expect(Images).toHaveLength(2)
  })

  it('has the correct alt text', () => {
    const altText = 'Lakritzel bottle'

    render(<ProductCard path="https://localhost:3000/" alt={altText} />)

    const Image = screen.getByAltText(altText)
    expect(Image).toHaveAttribute('alt', altText)
  })

  it('has the correct alt text', () => {
    const altText2 = 'Lakritzel Logo'

    render(<ProductCard path="https://localhost:3000/" alt={altText2} />)

    const Image2 = screen.getByAltText(altText2)
    expect(Image2).toHaveAttribute('alt', altText2)
  })

  it('displays the Price of the Product', () => {
    render(<ProductCard price={price} />)

    const Price = screen.getByText('18,-')
    expect(Price).toBeInTheDocument()
  })

  it('renders two buttons', () => {
    render(<ProductCard />)

    const Buttons = screen.getAllByRole('button')
    expect(Buttons).toHaveLength(2)
  })
})
