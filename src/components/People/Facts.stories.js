import React from 'react'
import Facts from './Facts'

export default {
  title: 'component/Facts',
  component: Facts,
}

const Template = args => <Facts {...args} />

export const Standard = Template.bind({})
