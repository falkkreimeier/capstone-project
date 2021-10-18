import { render, screen } from '@testing-library/react'
import MixedDrinks from './MixedDrinks'

describe('MixedDrinks', () => {
  it('shows all Text', () => {
    render(
      <MixedDrinks
        mixed="Shot"
        name="Wahnsinniger Bayleys"
        ingredients="Lakritzel, Bayleys"
        preparation="Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen"
      />
    )

    const text = screen.getByText('Shot Wahnsinniger Bayleys')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText('Lakritzel, Bayleys')
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText(
      'Bayleys und Lakritzel zu gleichen Teilen in ein Pinnchen'
    )
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('Zutaten:')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('Zubereitung:')
    expect(text5).toBeInTheDocument()
  })
})
