import { render, screen } from '@testing-library/react'
import OrderingInfo from './OrderingInfo'

describe('render OrderingInfo', () => {
  it('shows headline', () => {
    render(<OrderingInfo />)

    const headline = screen.getByText('Endlich frei!')
    expect(headline).toBeInTheDocument()
  })

  it('shows text', () => {
    render(<OrderingInfo />)

    const text = screen.getByText(
      'Willkommen auf der dunklen Seite der Nacht. Kleine Bestellbestätigung hab ich dir auch schon geschickt.'
    )
    expect(text).toBeInTheDocument()
  })

  it('shows Button', () => {
    render(<OrderingInfo />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('shows Image', () => {
    render(<OrderingInfo />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
