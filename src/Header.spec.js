import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('render Header', () => {
  it('shows Header Image', () => {
    render(<Header />)

    const header = screen.getByRole('img')
    expect(header).toBeInTheDocument()
  })
})
