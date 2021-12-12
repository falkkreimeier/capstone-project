import React from 'react'
import Nav from './Nav'

export default {
  title: 'component/Nav',
  component: Nav,
}

const Template = args => <Nav {...args} />

export const Standard = Template.bind({})
