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

    const text7 = screen.getByText('Schreiben/Texten')
    expect(text7).toBeInTheDocument()

    const text8 = screen.getByText('Web Developer')
    expect(text8).toBeInTheDocument()

    const text9 = screen.getByText('Werbetexten')
    expect(text9).toBeInTheDocument()

    const text10 = screen.getByText('Recherche')
    expect(text10).toBeInTheDocument()

    const text11 = screen.getByText('Ikea Schränke aufbauen')
    expect(text11).toBeInTheDocument()

    const text12 = screen.getByText('Grillen')
    expect(text12).toBeInTheDocument()
  })
})
