import { render, screen } from '@testing-library/react'
import ProfileDesktop from './ProfileDesktop'

describe('ProfileDesktop', () => {
  it('shows image', () => {
    render(<ProfileDesktop />)
    const image = screen.getByRole('img', { hidden: true })
    expect(image).toBeInTheDocument()
  })
})
