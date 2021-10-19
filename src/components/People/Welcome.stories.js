import React from 'react'
import Welcome from './Welcome'

export default {
  title: 'component/Welcome',
  component: Welcome,
}

const Template = args => <Welcome {...args} />

export const Standard = Template.bind({})
