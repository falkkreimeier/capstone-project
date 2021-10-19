import React from 'react'
import Profile from './Profile'

export default {
  title: 'component/Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />

export const Standard = Template.bind({})
