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

  it('shows Headline', () => {
    render(<StoryToShop />)

    const text = screen.getByText(
      'Dieser übergeschnapste Kritzelkopf hat mich über Nacht abgefüllt und in dieser kleinen Flasche verkorkt. Rette mich!'
    )
    expect(text).toBeInTheDocument()
  })
})
