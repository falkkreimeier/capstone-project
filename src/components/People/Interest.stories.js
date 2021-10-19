import React from 'react'
import Interests from './Interests'

export default {
  title: 'component/Interests',
  component: Interests,
}

const Template = args => <Interests {...args} />

export const Standard = Template.bind({})
