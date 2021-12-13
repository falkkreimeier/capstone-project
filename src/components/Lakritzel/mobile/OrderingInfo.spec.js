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
      'Überkritzel nur noch schnell die NaN € per PayPal oder Direktüberweisung. Alle Infos findest du in der Bestätigungsmail. Und dann füllen wir alle ab Muhahahahah ...'
    )
    expect(text).toBeInTheDocument()
  })

  it('shows Image', () => {
    render(<OrderingInfo />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
