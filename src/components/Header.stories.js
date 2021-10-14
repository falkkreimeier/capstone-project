import React from 'react'
import Header from './Header'

export default {
  title: 'component/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const Standard = Template.bind({})
Standard.args = {}
