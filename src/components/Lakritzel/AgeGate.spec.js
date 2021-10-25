import { render, screen } from '@testing-library/react'
import AgeGate from './AgeGate'
import { MemoryRouter } from 'react-router'

describe('AgeGate', () => {
  it('shows all images', () => {
    render(
      <MemoryRouter>
        <AgeGate />
      </MemoryRouter>
    )

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })

  it('shows the Link', () => {
    render(
      <MemoryRouter>
        <AgeGate />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('shows the button', () => {
    render(
      <MemoryRouter>
        <AgeGate />
      </MemoryRouter>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('shows all Text', () => {
    render(
      <MemoryRouter>
        <AgeGate />
      </MemoryRouter>
    )

    const text = screen.getByText('Ich bin schon über 18')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Ich bin noch keine 18')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText(
      'Um Zugang zu dieser Seite zu bekommen, musst du mindestens 18 Jahre alt sein!'
    )
    expect(text3).toBeInTheDocument()
  })
})
