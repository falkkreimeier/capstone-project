import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { MemoryRouter } from 'react-router'

describe('Footer', () => {
  it('shows 4 navLinks', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const nav = screen.getAllByRole('link')
    expect(nav).toHaveLength(4)
  })
})
