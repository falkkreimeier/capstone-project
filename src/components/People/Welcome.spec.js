import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

describe('render Welcome', () => {
  it('shows Welcome image', () => {
    render(<Welcome />)

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument()
  })
})
