import { render, screen } from '@testing-library/react'
import Github from './Github'

describe('render Github', () => {
  it('shows Github image', () => {
    render(<Github />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
