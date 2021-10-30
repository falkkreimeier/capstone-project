import { render, screen } from '@testing-library/react'
import TechStack from './TechStack'

describe('render TechStack', () => {
  it('shows TechStack Headline', () => {
    render(<TechStack />)

    const image = screen.getByRole('heading')
    expect(image).toBeInTheDocument()
  })

  it('shows Text', () => {
    render(<TechStack />)

    const text = screen.getByText('HTML')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('CSS')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('React')
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('JavaScript')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('Node.js')
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText('ExpressJS')
    expect(text6).toBeInTheDocument()

    const text7 = screen.getByText('MongoDB')
    expect(text7).toBeInTheDocument()

    const text8 = screen.getByText('Git & GitHub')
    expect(text8).toBeInTheDocument()

    const text9 = screen.getByText('Figma')
    expect(text9).toBeInTheDocument()
  })
})
