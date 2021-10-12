import React from 'react'
import Header from './Header'

export default {
  title: 'component/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const Normal = Template.bind({})
Normal.args = {
  image: process.env.PUBLIC_URL + '/img/painted-bottle.jpg',
}
