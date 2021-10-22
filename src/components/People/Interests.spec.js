import { render, screen } from '@testing-library/react'
import Interests from './Interests'

describe('render Interests', () => {
  it('shows Headline', () => {
    render(<Interests />)

    const headline = screen.getAllByRole('heading')
    expect(headline).toHaveLength(2)
  })

  it('shows shows all Text', () => {
    render(<Interests />)

    const text = screen.getByText('Programmieren')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Bücher (Fantasy)')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('Gaming')
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('Neue Dinge erfinden, z.B. Lakritzel')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('Hanteln schubsen')
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText('Schreiben/Texten')
    expect(text6).toBeInTheDocument()
  })
})
