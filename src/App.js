import Header from './components/Lakritzel/Header'
import ProductCard from './components/Lakritzel/ProductCard'
import Shop from './components/Lakritzel/Shop'
import CampaignCard from './components/Lakritzel/CampaignCard'
import Footer from './components/Lakritzel/Footer'
import Cocktails from './components/Lakritzel/Cocktails'
import Kritzelkopf from './components/People/Kritzelkopf'
import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import GlobalStlyles from './GlobalStyles'
import useOrder from './hook/useOrder'

function App({ data }) {
  const { handleAddOrder } = useOrder()

  return (
    <Wrapper>
      <GlobalStlyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {data.product.map(product => (
              <ProductCard
                description={product.description}
                crazy={product.crazy}
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
              <Cocktails
                name={cocktails.name}
                mixed={cocktails.mixedDrinks}
                ingredients={cocktails.ingredients}
                preparation={cocktails.preparation}
                key={cocktails.name}
              />
            ))}
          </Route>
          <Route exact path="/kritzelkopf">
            <Kritzelkopf />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  max-height: 920px;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 5px;
`

const Main = styled.main`
  grid-area: main;
  height: auto;
  overflow: auto;
`

export default App
