import { render, screen } from '@testing-library/react'
import LinkedIn from './linkedIn'

describe('render LinkedIn', () => {
  it('shows LinkedIn image', () => {
    render(<LinkedIn />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
