import { render, screen } from '@testing-library/react'
import ShoppingCard from './ShoppingCart'

describe('ShoppingCard', () => {
  it('shows Headline', () => {
    render(<ShoppingCard />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })
})
