import { render, screen } from '@testing-library/react'
import Facts from './Facts'

describe('render Facts', () => {
  it('shows all Headlines', () => {
    render(<Facts />)

    const headline = screen.getAllByRole('heading')
    expect(headline).toHaveLength(2)
  })

  it('shows all Text', () => {
    render(<Facts />)

    const text = screen.getByText('41 Jahre jung')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('1,93m klein')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('Hoffnungsloser Optimist')
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('Philantrop')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText(
      'Voll auf Spur, aber immer auch ein kleines bisschen daneben.'
    )
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText('"Isst du das noch?!"')
    expect(text6).toBeInTheDocument()

    const text7 = screen.getByText(
      '"Wer hat das Fettnäpfchen hier hingestellt?!"'
    )
    expect(text7).toBeInTheDocument()
  })
})
