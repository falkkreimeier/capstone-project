import { tupleExpression } from '@babel/types'
import { render, screen } from '@testing-library/react'
import CocktailsLink from './CocktailsDesktop'

describe('CocktailsLink', () => {
  it('shows Headline', () => {
    render(<CocktailsLink />)

    const headline = screen.getByRole('heading', { hidden: true })
    expect(headline).toBeInTheDocument()
  })
})
