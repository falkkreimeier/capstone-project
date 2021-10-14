import { render, screen } from '@testing-library/react'
import Shop from './Shop'

describe('Shop', () => {
  it('has three buttons', () => {
    render(<Shop />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('shows Text', () => {
    render(<Shop />)

    const text = screen.getByText('(Vorsicht! Kann abfüllend wirken.)')
    expect(text).toBeInTheDocument()
  })

  it('shows Button Text', () => {
    render(<Shop />)

    const buttonText = screen.getByText('Lakritzel befreien')
    expect(buttonText).toBeInTheDocument()
  })

  it('shows Button Back Text', () => {
    render(<Shop />)

    const buttonBackText = screen.getByText('Lass mich nicht')
    expect(buttonBackText).toBeInTheDocument()

    const buttonBackText2 = screen.getByText('ZURÜCK')
    expect(buttonBackText2).toBeInTheDocument()
  })
})
