import React from 'react'
import Portfolio from './Portfolio'

export default {
  title: 'component/Portfolio',
  component: Portfolio,
}

const Template = args => <Portfolio {...args} />

export const Standard = Template.bind({})
