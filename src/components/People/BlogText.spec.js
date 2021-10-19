import { render, screen } from '@testing-library/react'
import BlogText from './BlogText'

describe('render BlogText', () => {
  it('shows all Text', () => {
    render(<BlogText />)

    const text = screen.getByText(
      'Das einzige Steak, das man sich beim Essen versauen kann.'
    )
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText(
      'Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak, Tomahawk Steak...'
    )
    expect(text2).toBeInTheDocument()
  })
})
