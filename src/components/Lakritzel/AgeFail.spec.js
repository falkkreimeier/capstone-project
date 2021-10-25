import { render, screen } from '@testing-library/react'
import AgeFail from './AgeFail'

describe('AgeFail', () => {
  it('shows Image', () => {
    render(<AgeFail />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('shows the Text', () => {
    render(<AgeFail />)

    const text = screen.getByText('Oh, nein!')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Du bist noch zu klein.')
    expect(text2).toBeInTheDocument()
  })
})
