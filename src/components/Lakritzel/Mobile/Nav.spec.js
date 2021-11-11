import { render, screen } from '@testing-library/react'
import Nav from './Nav'
import { MemoryRouter } from 'react-router'

describe('Nav', () => {
  it('shows 4 navLinks', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )

    const nav = screen.getAllByRole('link')
    expect(nav).toHaveLength(4)
  })
})
