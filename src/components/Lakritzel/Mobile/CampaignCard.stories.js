import React from 'react'
import CampaignCard from './CampaignCard'

export default {
  title: 'component/CampaignCard',
  component: CampaignCard,
}

const Template = args => <CampaignCard {...args} />

export const Standard = Template.bind({})
Standard.args = {
  image: process.env.PUBLIC_URL + '/img/Übergeschnapst.jpg',
}
