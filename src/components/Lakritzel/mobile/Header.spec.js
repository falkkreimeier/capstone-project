import { render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Header', () => {
  it('shows Header Image', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
