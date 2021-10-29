import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('shows Header Image', () => {
    render(<Header />)

    const logo = screen.getAllByRole('img')
    expect(logo).toHaveLength(2)
  })
})
