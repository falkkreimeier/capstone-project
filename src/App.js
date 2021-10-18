import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Shop from './components/Shop'
import CampaignCard from './components/CampaignCard'
import Footer from './components/Footer'
import MixedDrinks from './components/MixedDrinks'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

function App({ data }) {
  const initialData = [
    {
      firstName: 'Falk',
      name: 'Kreimeier',
      street: 'Gesundheitstraße 11',
      zipCode: '42699',
      city: 'Solingen',
      email: 'f.kreimeier@gmx.net',
      mount: '4',
      message: 'Hallo World',
    },
  ]

  const [orderData, setOrderData] = useState(() => {
    if (localStorage.getItem('usersLocalStorage')) {
      return JSON.parse(localStorage.getItem('usersLocalStorage'))
    } else {
      return initialData
    }
  })

  function handleAddOrder({
    firstName,
    name,
    street,
    zipCode,
    city,
    quantity,
    message,
  }) {
    const addOrder = [
      ...orderData,
      {
        firstName: firstName,
        name: name,
        street: street,
        zipCode: zipCode,
        city: city,
        quantity: quantity,
        message: message,
      },
    ]
    setOrderData(addOrder)

    const stringifiedValue = JSON.stringify(addOrder)
    localStorage.setItem('productsLocalStorage', stringifiedValue)
  }

  return (
    <Wrapper>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {data.product.map(product => (
              <ProductCard
                description={product.description}
                claim={product.claim}
                price={product.price}
                ingredients={product.ingredients}
                alcohol={product.alcohol}
                mount={product.mount}
                image={product.image}
                logo={product.logo}
                key={product.name}
              />
            ))}
            <Shop onAddOrder={handleAddOrder} />
          </Route>
          <Route exact path="/campaign">
            {data.campaign.map(campaign => (
              <CampaignCard image={campaign.image} key={campaign.image} />
            ))}
          </Route>
          <Route exact path="/cocktails">
            {data.cocktails.map(cocktails => (
              <MixedDrinks
                name={cocktails.name}
                mixed={cocktails.mixedDrinks}
                ingredients={cocktails.ingredients}
                preparation={cocktails.preparation}
                key={cocktails.name}
              />
            ))}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  gap: 5px;
`

const Main = styled.main`
  grid-area: main;
  height: auto;
  overflow: auto;
`

export default App
