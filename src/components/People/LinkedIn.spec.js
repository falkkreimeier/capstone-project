import { render, screen } from '@testing-library/react'
import LinkedIn from './LinkedIn'

describe('render LinkedIn', () => {
  it('shows LinkedIn image', () => {
    render(<LinkedIn />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
