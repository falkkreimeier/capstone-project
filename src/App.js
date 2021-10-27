import Header from './components/Lakritzel/Header'
import AgeGate from './components/Lakritzel/AgeGate'
import ProductList from './components/Lakritzel/ProductList'
import Shop from './components/Lakritzel/Shop'
import Nav from './components/Lakritzel/Nav'
import CampaignCard from './components/Lakritzel/CampaignCard'
import CocktailList from './components/Lakritzel/CocktailList'
import Kritzelkopf from './components/People/Kritzelkopf'
import styled, { css } from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import useOrder from './hook/useOrder'
import WrongAgePicture from './components/Lakritzel/WrongAgePicture'
import { useState } from 'react'
import saveToLocal from './hook/saveToLocal'
import loadFromLocal from './hook/loadFromLocal'
import { Redirect } from 'react-router'

function App({ data }) {
  const { handleAddOrder } = useOrder()

  const [ageVerified, setAgeVerified] = useState(loadFromLocal('age') || false)
  const [isOver18, setIsOver18] = useState(loadFromLocal('age') || false)

  function AgeButtonClick(value) {
    saveToLocal('age', value)
    setAgeVerified(true)
    setIsOver18(value)
  }
  if (!ageVerified || !isOver18) {
    return (
      <Wrapper>
        <AgeGate ageVerified={ageVerified} onAgeButtonClick={AgeButtonClick} />
        {!isOver18 && <WrongAgePicture />}
      </Wrapper>
    )
  }
  // if (!isOver18) {
  //   return <WrongAgePicture />
  // }

  return (
    <Wrapper ageVerified={ageVerified}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {ageVerified ? <ProductList data={data} /> : <Redirect to="/" />}
            <Shop onAddOrder={handleAddOrder} />
          </Route>
          <Route exact path="/campaign">
            {data.campaign.map(campaign => (
              <CampaignCard image={campaign.image} key={campaign.image} />
            ))}
          </Route>
          <Route exact path="/cocktails">
            <CocktailList data={data} />
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
  ${({ ageVerified }) =>
    ageVerified &&
    css`
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: fallDown;
      animation-fill-mode: forwards;
      @keyframes fallDown {
        from {
          transform: translatey(-900px);
        }

        to {
          transform: translateY(0px);
          visibility: invisible;
        }
      }
    `}
`

const Main = styled.main`
  margin: 94px auto;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  gap: 5px;
  overflow: auto;
  flex: 1;
`

export default App
