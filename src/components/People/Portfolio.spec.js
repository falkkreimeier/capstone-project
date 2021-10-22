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

  it('renders Link', () => {
    render(<Portfolio />)

    const buttonEl = screen.getByText('Portfolio')
    expect(buttonEl).toBeInTheDocument()
  })
})
