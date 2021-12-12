import React from 'react'
import ShoppingCard from './ShoppingCart'

export default {
  title: 'component/ShoppingCard',
  component: ShoppingCard,
}

const Template = args => <ShoppingCard {...args} />

export const Standard = Template.bind({})
