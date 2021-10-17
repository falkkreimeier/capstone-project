import { render, screen } from '@testing-library/react'
import MixedDrinks from './MixedDrinks'

describe('MixedDrinks', () => {
  const mixed = 'Shot'
  const name = 'Wahnsinniger Bayleys'
  const ingredience = 'Zutaten: Lakritzel und Bayleys'
  const preparation =
    'Zubereitung: Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen'

  it('shows all Text', () => {
    render(
      <MixedDrinks
        mixed={mixed}
        name={name}
        ingredience={ingredience}
        preparation={preparation}
      />
    )

    const text = screen.getByText('Shot - Wahnsinniger Bayleys')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Zutaten: Lakritzel und Bayleys')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText(
      'Zubereitung: Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen'
    )
    expect(text3).toBeInTheDocument()
  })
})
