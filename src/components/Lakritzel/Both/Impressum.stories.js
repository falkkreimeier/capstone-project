import React from 'react'
import Impressum from './Impressum'

export default {
  title: 'component/Impressum',
  component: Impressum,
}

const Template = args => <Impressum {...args} />

export const Standard = Template.bind({})
