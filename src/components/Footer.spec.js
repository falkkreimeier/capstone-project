import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { MemoryRouter } from 'react-router'

describe('Footer', () => {
  it('shows Images', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(4)
  })

  it('has the correct alt text', () => {
    const altText = 'Products'
    const altText2 = 'Motive'

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const text = screen.getByAltText(altText)
    expect(text).toHaveAttribute('alt', altText)

    const text2 = screen.getByAltText(altText2)
    expect(text2).toHaveAttribute('alt', altText2)
  })
})
