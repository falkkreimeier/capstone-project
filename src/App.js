import Header from './components/Lakritzel/Header'
import AgeGate from './components/Lakritzel/AgeGate'
import ProductCard from './components/Lakritzel/ProductCard'
import Shop from './components/Lakritzel/Shop'
import Nav from './components/Lakritzel/Nav'
import CampaignCard from './components/Lakritzel/CampaignCard'
import Cocktails from './components/Lakritzel/Cocktails'
import Kritzelkopf from './components/People/Kritzelkopf'
import styled from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import GlobalStlyles from './GlobalStyles'
import useOrder from './hook/useOrder'
import WrongAgePicture from './components/Lakritzel/WrongAgePicture'

function App({ data }) {
  const { handleAddOrder } = useOrder()

  return (
    <Wrapper>
      <AgeGate />
      <Route exact path="/agefail">
        <WrongAgePicture />
      </Route>
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
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  max-height: 963px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Main = styled.main`
  margin: 84px auto 56px auto;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
  flex: 1;
`

export default App
