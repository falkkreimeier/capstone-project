import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('render Skills', () => {
  it('shows Headline', () => {
    render(<Skills />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })

  it('shows shows all Text', () => {
    render(<Skills />)

    const text = screen.getByText('Semantisches HTML')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Java Script')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('CSS')
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('React')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('Werbetexter')
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText('Kaufmann mit Führungserfahrung')
    expect(text6).toBeInTheDocument()
  })
})
