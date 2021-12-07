import React from 'react'
import CocktailsDesktop from './CocktailsDesktop'

export default {
  title: 'component/CocktailsDesktop',
  component: CocktailsDesktop,
}

const Template = args => <CocktailsDesktop {...args} />

export const Standard = Template.bind()
