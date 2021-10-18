import React from 'react'
import MixedDrinks from './Cocktails'

export default {
  title: 'component/MixedDrinks',
  component: MixedDrinks,
}

const Template = args => <MixedDrinks {...args} />

export const Standard = Template.bind({})
Standard.args = {
  mixedDrinks: 'Shot',
  name: 'Wahnsinniger Bayleys',
  ingredience: 'Lakritzel und Bayleys',
  preparation: 'Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen',
}
