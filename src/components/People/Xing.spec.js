import { render, screen } from '@testing-library/react'
import Xing from './Xing'

describe('render Xing', () => {
  it('shows Xing image', () => {
    render(<Xing />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
