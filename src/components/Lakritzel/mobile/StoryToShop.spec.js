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
      'Ich wurde über Nacht abgefüllt und in dieser Flasche eingesperrt! Angeblich bin ich total übergeschnapst, aber ICH BIN UNSCHULDIG! Hol mich hier raus, ich fülle auch keinen ab ... versprochen.'
    )
    expect(text).toBeInTheDocument()
  })
})
