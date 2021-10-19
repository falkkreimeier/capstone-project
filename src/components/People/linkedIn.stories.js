import React from 'react'
import LinkedIn from './linkedIn'

export default {
  title: 'component/LinkedIn',
  component: LinkedIn,
}

const Template = args => <LinkedIn {...args} />

export const Standard = Template.bind({})
