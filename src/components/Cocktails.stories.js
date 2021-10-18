import React from 'react'
import Cocktails from './Cocktails'

export default {
  title: 'component/Cocktails',
  component: Cocktails,
}

const Template = args => <Cocktails {...args} />

export const Standard = Template.bind({})
Standard.args = {
  mixed: 'Shot',
  name: 'Wahnsinniger Bayleys',
  ingredience: 'Lakritzel und Bayleys',
  preparation: 'Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen',
}
