import React from 'react'
import ProductCard from './ProductCard'

export default {
  title: 'component/ProductCard',
  component: ProductCard,
}

const Template = args => <ProductCard {...args} />

export const WithPrice = Template.bind({})
WithPrice.args = {
  image: process.env.PUBLIC_URL + '/img/painted-bottle.jpg',
  logo: process.env.PUBLIC_URL + '/img/Logo.jpg',
  price: '18,-',
  description:
    'Total übergeschnapster Lakritzlikör. VORSICHT: Kann abfüllend wirken.',
  claim: 'Der dunkle Wahnsinn',
  ingredients: 'Süßholz, Samliaksalz und Sternanis.',
  alcohol: '25% Alkohol',
  mount: '700ml',
}
