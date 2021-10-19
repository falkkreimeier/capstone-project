import React from 'react'
import Github from './Github'

export default {
  title: 'component/Github',
  component: Github,
}

const Template = args => <Github {...args} />

export const Standard = Template.bind({})
