import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Datenschutz from './Datenschutz'

describe('Datenschutz', () => {
  it('shows Link', () => {
    render(
      <MemoryRouter>
        <Datenschutz />
      </MemoryRouter>
    )

    const link = screen.getByText('ZURÜCK')
    expect(link).toBeInTheDocument()
  })
})
