import React from 'react'
import CampaignCardDesktop from './CampaignCardDesktop'

export default {
  title: 'component/CampaignCardDesktop',
  component: CampaignCardDesktop,
}

const Template = args => <CampaignCardDesktop {...args} />

export const Standard = Template.bind()
