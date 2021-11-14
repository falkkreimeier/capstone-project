import { render, screen } from '@testing-library/react'
import CampaignCard from './CampaignCard'

describe('render CampaignCard', () => {
  it('shows CampaignCard Image', () => {
    render(<CampaignCard />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('has the correct alt text', () => {
    const altText = 'Lakritzel escalates quickly'

    render(<CampaignCard image="https://localhost:3000/" />)

    const text = screen.getByAltText(altText)
    expect(text).toHaveAttribute('alt', altText)
  })
})
