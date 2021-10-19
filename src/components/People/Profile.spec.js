import { render, screen } from '@testing-library/react'
import Profile from './Profile'

describe('render Profile', () => {
  it('shows Profile Image', () => {
    render(<Profile />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('shows Text', () => {
    const Text = 'Kritzelkopf'

    render(<Profile />)

    const text = screen.getByText(Text)
    expect(text).toBeInTheDocument()
  })
})
