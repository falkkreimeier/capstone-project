import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio'
import userEvent from '@testing-library/user-event'

describe('render Portfolio', () => {
  const mockOnButtonClick = jest.fn()

  it('shows Headline', () => {
    render(<Portfolio />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })

  it('shows image', () => {
    render(<Portfolio />)

    const headline = screen.getByRole('img')
    expect(headline).toBeInTheDocument()
  })

  it('renders a button', () => {
    render(<Portfolio />)

    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toBeInTheDocument()
  })
})
