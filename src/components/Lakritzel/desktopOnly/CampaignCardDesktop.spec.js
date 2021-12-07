import { render, screen } from '@testing-library/react'
import CampaignCardDesktop from './CampaignCardDesktop'

describe('CampaignCardDesktop', () => {
  it('shows image', () => {
    render(<CampaignCardDesktop />)
    const image = screen.getByRole('img', { hidden: true })
    expect(image).toBeInTheDocument()
  })
})
