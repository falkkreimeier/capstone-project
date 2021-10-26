import React from 'react'
import AgeGate from './AgeGate'

export default {
  title: 'component/AgeGate',
  component: AgeGate,
}

const Template = args => <AgeGate {...args} />

export const Standard = Template.bind({})
