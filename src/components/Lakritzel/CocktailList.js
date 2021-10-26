import Cocktails from './Cocktails'

export default function CocktailList({ data }) {
  return data.cocktails.map(cocktails => (
    <Cocktails
      name={cocktails.name}
      mixed={cocktails.mixedDrinks}
      ingredients={cocktails.ingredients}
      preparation={cocktails.preparation}
      key={cocktails.name}
    />
  ))
}
