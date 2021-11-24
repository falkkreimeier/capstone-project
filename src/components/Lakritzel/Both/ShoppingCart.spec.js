import { render, screen } from '@testing-library/react'
import ShoppingCard from './ShoppingCart'

describe('ShoppingCard', () => {
  it('shows Headline', () => {
    render(<ShoppingCard />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })

  it('shows all Buttons', () => {
    render(<ShoppingCard />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('shows Image', () => {
    render(<ShoppingCard />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('shows Text', () => {
    render(<ShoppingCard />)

    const text = screen.getByText('Hol mich hier raus!')
    expect(text).toBeInTheDocument()
  })
})
