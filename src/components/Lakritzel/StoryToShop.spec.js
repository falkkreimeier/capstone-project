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
      'Ich wurde gegen meinen Willen in dieser Flasche verkorkt. Hol mich hier raus! Ich fülle auch keinen ab ... versprochen.'
    )
    expect(text).toBeInTheDocument()
  })
})
