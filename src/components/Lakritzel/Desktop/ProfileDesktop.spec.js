import { render, screen } from '@testing-library/react'
import ProfileDesktop from './ProfileDesktop'

describe('ProfileDesktop', () => {
  it('shows image', () => {
    render(<ProfileDesktop />)
    const headline = screen.getByRole('heading', { hidden: true })
    expect(headline).toBeInTheDocument()
  })
})
