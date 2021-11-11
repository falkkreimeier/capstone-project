import { render, screen } from '@testing-library/react'
import CampaignCardLink from './CampaignCardLink'

describe('CampaignCardLink', () => {
  it('shows image', () => {
    render(<CampaignCardLink />)
    const image = screen.getByRole('img', { hidden: true })
    expect(image).toBeInTheDocument()
  })
})
