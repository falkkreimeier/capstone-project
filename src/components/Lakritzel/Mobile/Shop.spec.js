import { render, screen } from '@testing-library/react'
import Shop from './Shop'

describe('Shop', () => {
  it('has two buttons', () => {
    render(<Shop />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('shows Button Text', () => {
    render(<Shop />)

    const buttonText = screen.getByText('Rette Lakritzel')
    expect(buttonText).toBeInTheDocument()
  })
})
