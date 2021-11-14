import React from 'react'
import StoryToShop from './StoryToShop'

export default {
  title: 'component/StoryToShop',
  component: StoryToShop,
}

const Template = args => <StoryToShop {...args} />

export const Standard = Template.bind({})
Standard.args = {}
