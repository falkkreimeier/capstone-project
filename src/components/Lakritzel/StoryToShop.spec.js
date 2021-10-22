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
      'Dieser verkorkste Kritzelkopf hat mich in dieser kleinen Flasche verkorkt. Hol mich hier raus, ich fülle auch keinen ab, versprochen ...'
    )
    expect(text).toBeInTheDocument()
  })
})
