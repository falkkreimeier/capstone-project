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
      'Tausend Dank, eine Mail mit meinen dunklen Plänen habe ich dir gerade geschickt.'
    )
    expect(text).toBeInTheDocument()
  })

  it('shows shows Button', () => {
    render(<OrderingInfo />)

    const text = screen.getByRole('button')
    expect(text).toBeInTheDocument()
  })
})
