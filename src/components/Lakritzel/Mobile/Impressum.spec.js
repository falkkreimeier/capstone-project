import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Impressum from './Impressum'

describe('Impressum', () => {
  it('shows Image', () => {
    render(
      <MemoryRouter>
        <Impressum />
      </MemoryRouter>
    )

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('shows Link', () => {
    render(
      <MemoryRouter>
        <Impressum />
      </MemoryRouter>
    )

    const link = screen.getByText('ZURÜCK')
    expect(link).toBeInTheDocument()
  })
})
