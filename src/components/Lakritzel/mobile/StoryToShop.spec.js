import { render, screen } from '@testing-library/react'
import StoryToShop from './StoryToShop'

describe('StoryToShop', () => {
  it('shows Image', () => {
    render(<StoryToShop />)

    const Image = screen.getByRole('img')
    expect(Image).toBeInTheDocument()
  })

  it('shows Headline', () => {
    render(<StoryToShop />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })

  it('shows text', () => {
    render(<StoryToShop />)

    const text = screen.getByText(
      'Ich wurde in dieser Flasche eingesperrt, nur weil ich ein bisschen übergeschnapst bin. Hol mich hier raus! Ich fülle auch keinen ab ... versprochen.'
    )
    expect(text).toBeInTheDocument()
  })
})
