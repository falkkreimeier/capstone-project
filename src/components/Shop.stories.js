import React from 'react'
import Shop from './Shop'

export default {
  title: 'component/Shop',
  component: Shop,
}

const Template = args => <Shop {...args} />

export const Standard = Template.bind({})
Standard.args = {}
